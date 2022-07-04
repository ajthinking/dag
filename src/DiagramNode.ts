import { Item } from './Item';
import { Link } from './Link';
import { Node } from './Node';
import { Parameter } from './Parameter';
import { Port } from './Port';

export class DiagramNode extends Node {
  nodes: Node[] = [];
  links = [];
  parent: DiagramNode;

  addNodes(nodes: Node[]): this {
    this.nodes.push(...nodes);
    return this;
  }

  addNode(node: Node): this {
    this.nodes.push(node.setParent(this));
    return this;
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
      this.getStorage().concat(link.id, items);
      this.nodesConnectedToLink(link).forEach((node) => {
        node.onNewItems(); // TODO
      });
    }
  }

  nodesConnectedToLink(link: Link): Node[] {
    return []; // TODO
  }

  starterNodes(): Node[] {
    return this.nodes.filter((node) => node.isStarter());
  }
}
