import { DiagramNode } from '../src/DiagramNode';

it('can execute a simple diagram', async () => {
  const diagram = new DiagramNode();
  // when adding a node, what TYPE should be added?
  // what is the difference between a node and a diagram node?
  // a diagram is a diagram, however, a node can act as a diagram and a diagram can act as a node (?!)
  // have a sketch
  const node1 = new Node();
  diagram.addNode(node1);
  await diagram.run();
});

/*
import { Item } from './Item';
import { ItemStorage } from './ItemStorage';
import { Link } from './Link';
import { Node, NodeInput } from './Node';
import { Parameter } from './Parameter';
import { Port } from './Port';

export class DiagramNode extends Node {
  nodes: Node[] = [];
  links: Link[] = [];
  parent: DiagramNode;
  itemStorage: ItemStorage;

  constructor(
    input: NodeInput = {
      itemStorage: new ItemStorage(),
    },
  ) {
    super(input);

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

  starterNodes(): Node[] {
    return this.nodes.filter((node) => node.isStarter());
  }

  async start(): Promise<void> {
    const starterNodes = this.starterNodes();

    for (const node of starterNodes) {
      await node.start();
    }
  }

  async run(): Promise<void> {
    return this.start();
  }
}

*/

/*
Given:
	Create --> FetchTodos --> Log
								|
								|
							Input --> Chunk --> Request --> Output

	A Diagram contains 3 nodes.
	One of them, FetchTodos, is a diagram acting as a node.
	The others, are regular nodes.

What classes do I need?
	Diagram
		Node --> Diagram --> Node
								|
								|
							Node --> Node --> Node --> Node

	const diagram = new Diagram()
	
	// resolve the blueprint and create a node from it	
	diagram.add(Create.makeNode())
	
	// resolve the blueprint and create a node from it	
	diagram.add(FetchTodos)
	
	// resolve the blueprint and create a node from it		
	diagram.add(Log)

	// find starters, start them, await results
	diagram.run()
*/
