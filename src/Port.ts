import { Entity } from './types/Entity';
import { Item } from './Item';
import { Node } from './Node';
import { uid } from './utils/uid';

export type PortInput = {
  id?: string;
  name?: string;
  parent?: Node;
};

export abstract class Port implements Entity {
  id: string;
  name: string;
  isInput: boolean;
  parent: Node;

  constructor(input: PortInput = {}) {
    this.id = input.id ?? uid();
    this.parent = input.parent;
    this.name = input.name ?? this.constructor.name;
  }

  protected getStorage() {
    return this.parent.getStorage();
  }
}
