import { Entity } from './types/Entity';
import { Item } from './Item';
import { Parameter } from './Parameter';
import { Port } from './Port';
import { uid } from './utils/uid';
import { ItemStorage } from './ItemStorage';
import { DiagramNode } from './DiagramNode';

export type NodeInput = {
  id?: string;
  name?: string;
  parameters?: Parameter[];
  inPorts?: Port[];
  outPorts?: Port[];
  parent?: DiagramNode;
  itemStorage?: ItemStorage;
};

export abstract class Node implements Entity {
  id: string;
  name: string;
  parameters: Parameter[] = [];
  inPorts: Port[] = [];
  outPorts: Port[] = [];
  parent: DiagramNode;
  itemStorage: ItemStorage;

  constructor(input: NodeInput = {}) {
    this.id = input.id ?? uid();
    this.name = input.name ?? this.constructor.name;
    this.parameters = input.parameters ?? [];
    this.inPorts = input.inPorts ?? [];
    this.outPorts = input.outPorts ?? [];
  }

  isStarter(): boolean {
    return Boolean(this.start);
  }

  onStart() {
    return this;
  }

  onAllItemsReady() {
    return this;
  }

  onNewItems(port: Port, items: Item[]): void {
    const handlerName = `onNewItemsAt${port.name}`;
    const handler = this[handlerName];

    if (handler) handler(items);
  }

  onDone() {
    return this;
  }

  isDone() {
    return false;
  }

  start?(): Promise<void>;

  canRespondTo(event) {
    return false;
  }

  getItemStorage(): ItemStorage {
    console.log('Attempting to get item storage');
    console.log(this['itemStorage']);
    if (this['itemStorage']) return this['itemStorage'];

    return this.parent.getItemStorage();
  }

  setParent(parent: DiagramNode): Node {
    this.parent = parent;

    return this;
  }

  output(items: Item[], portName = 'output'): Node {
    console.log('output', items, portName);
    const port = this.portNamed(portName);
    this.parent.newItemsAtPort(port, items);

    return this;
  }

  portNamed(name: string): Port | undefined {
    return (
      this.inPortNamed(name) ?? this.outPortNamed(name)
    );
  }

  inPortNamed(name: string): Port | undefined {
    return this.inPorts.find((port) => port.name === name);
  }

  outPortNamed(name: string): Port | undefined {
    return this.outPorts.find((port) => port.name === name);
  }

  serialize(): string {
    return JSON.stringify(this);
  }
}
