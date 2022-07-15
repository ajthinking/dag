import {
  Entity,
  InPortMap,
  OutPortMap,
  ParameterMap,
} from './types';
import { Item } from './Item';
import { Port } from './Port';
import { uid } from './utils/uid';
import { ItemStorage } from './ItemStorage';
import { Parameter } from './Parameter';
import { InPort } from './InPort';
import { OutPort } from './OutPort';
import { SmartMap } from './utils/SmartMap';
import { Diagram } from './Diagram';
import { Blueprint } from './Blueprint';

export class Node implements Entity {
  id: string;
  name: string;
  parameters: ParameterMap;
  inPorts: InPortMap;
  outPorts: OutPortMap;
  parent: Diagram;

  constructor(input: Blueprint) {
    this.id = input.id ?? uid();
    this.name = input.name ?? this.constructor.name;
    this.parameters =
      input.parameters ?? new SmartMap<string, Parameter>();
    this.inPorts = input.inPorts.onEach((port) =>
      port.setParent(this),
    );
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

    if (this[handlerName]) this[handlerName](items);
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
    if (this['itemStorage']) return this['itemStorage'];

    return this.parent.getItemStorage();
  }

  setParent(parent: Diagram): Node {
    this.parent = parent;

    return this;
  }

  output(items: Item[], portName = 'Output'): Node {
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
    return this.inPorts.get(name);
  }

  outPortNamed(name: string): Port | undefined {
    return this.outPorts.get(name);
  }

  serialize(): string {
    return JSON.stringify(this);
  }
}
