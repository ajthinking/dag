import { Entity } from './types/Entity';
import { Item } from './Item';
import { Parameter } from './Parameter';
import { Port } from './Port';
import { uid } from './utils/uid';
import { Storage } from './Storage';

export type NodeInput = {
  id?: string;
  name?: string;
  parameters?: Parameter[];
  inPorts?: Port[];
  outPorts?: Port[];
  parent?: Node;
  storage?: Storage;
};

export abstract class Node implements Entity {
  id: string;
  name: string;
  parameters: Parameter[] = [];
  inPorts: Port[] = [];
  outPorts: Port[] = [];
  parent: Node;
  storage: Storage;

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

  onNewItems() {
    return this;
  }

  onNewItemsAt(port) {
    return this;
  }

  onDone() {
    return this;
  }

  isDone() {
    return false;
  }

  start?(): Promise<void>;

  async run() {
    return this;
  }

  canRespondTo(event) {
    return false;
  }

  getStorage() {
    if (this['storage']) return this['storage'];

    return this.parent.getStorage();
  }

  setParent(parent: Node): Node {
    this.parent = parent;

    return this;
  }

  output(items: Item[], portName = 'output'): Node {
    this.portNamed(portName).output(items);

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
