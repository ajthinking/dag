import { Entity } from './types/Entity';
import { Port } from './Port';
import { uid } from './utils/uid';
import { NEW_ITEMS_AT_PORT } from './events/NEW_ITEMS_AT_PORT';
import { Item } from './Item';
import { DiagramNode } from './DiagramNode';

export type LinkInput = {
  id?: string;
  name?: string;
  from: Port;
  to: Port;
  parent?: DiagramNode;
};

export class Link implements Entity {
  id: string;
  name: string;
  from: Port;
  to: Port;
  parent: DiagramNode;

  constructor(input: LinkInput) {
    this.id = input.id ?? uid();
    this.from = input.from;
    this.to = input.to;
    this.name = input.name ?? this.createName();
    this.parent = input.parent;
  }

  attach(items: Item[]) {
    //this.parent.getItemStorage().set(this.id, items);
  }

  createName(): string {
    const fromNodeName = this.from?.parent?.name;
    const fromPortName = this.from?.name;

    const toNodeName = this.to?.parent?.name;
    const toPortName = this.to?.name;

    return `${fromNodeName}.${fromPortName}--->${toNodeName}.${toPortName}`;
  }

  serialize(): string {
    return JSON.stringify(this);
  }

  canRespondTo(event) {
    if (event instanceof NEW_ITEMS_AT_PORT) {
      return this.from.id === event.portId;
    }
    return false;
  }
}
