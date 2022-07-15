import { Item } from './Item';
import { ItemStorage } from './ItemStorage';
import { Link } from './Link';
import { Node } from './Node';
import { Parameter } from './Parameter';
import { Port } from './Port';

export class Diagram {
  nodes: Node[] = [];
  links: Link[] = [];
  parent: Diagram;
  itemStorage: ItemStorage;

  constructor(
    input = {
      itemStorage: new ItemStorage(),
    },
  ) {
    this.itemStorage = input.itemStorage;
  }

  addNodes(nodes: Node[]): this {
    this.nodes.push(
      ...nodes.map((node) => node.setParent(this)),
    );

    return this;
  }

  addNode(node: Node): this {
    this.nodes.push(node.setParent(this));
    return this;
  }

  itemsAt(key: string) {
    return this.getItemStorage().get(key);
  }

  linkNodes(from: Node, to: Node) {
    const link = new Link({
      from: from.outPorts[0],
      to: to.inPorts[0],
      parent: this,
    });

    this.links.push(link);
  }

  linkPorts(from: Port, to: Port) {
    const link = new Link({
      from: from,
      to: to,
      parent: this,
    });

    this.links.push(link);
  }

  newItemsAtPort(port: Port, items: Item[]) {
    const connectedLinks = this.links.filter(
      (link) => link.from.id === port.id,
    );

    for (const link of connectedLinks) {
      this.getItemStorage().concat(link.id, items);
      const dependentNode = link.to.parent;
      dependentNode.onNewItems(link.to, items);
    }
  }

  getItemStorage() {
    return this.itemStorage;
  }

  starterNodes(): Node[] {
    return this.nodes.filter((node) => node.isStarter());
  }

  async start(): Promise<void> {
    // Continue here
    // return (new DiagramExecution(this)).start();
    const starterNodes = this.starterNodes();

    for (const node of starterNodes) {
      await node.start();
    }
  }

  async run(): Promise<void> {
    return this.start();
  }
}
