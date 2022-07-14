import { InPort } from '../src/InPort';
import { Node, NodeInput } from '../src/Node';
import { OutPort } from '../src/OutPort';
import { Port } from '../src/Port';
import { Diagram } from '../src/Diagram';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Diagram()).toBeInstanceOf(Diagram);
  });

  // it('can instanciate with a itemStorage', () => {
  //   expect(new Diagram()).toBeInstanceOf(
  //     Diagram,
  //   );
  // });
});

describe('addNode', () => {
  it('can add a single node', () => {
    const diagram = new Diagram();
    const node = new Node();
    diagram.addNode(node);
    expect(diagram.nodes).toContain(node);
  });
});

describe('addNodes', () => {
  it('can add multiple nodes', () => {
    const diagram = new Diagram();
    const nodes = [new Node(), new Node()];
    diagram.addNodes(nodes);
    expect(diagram.nodes.length).toBe(2);
  });
});

describe('linkPorts', () => {
  it('can link two ports', () => {
    const diagram = new Diagram();
    const from = new OutPort();
    const to = new InPort();
    diagram.linkPorts(from, to);
    expect(diagram.links.length).toBe(1);
  });
});

describe('linkNodes', () => {
  it('can link two nodes', () => {
    const diagram = new Diagram();
    const from = new Node();
    const to = new Node();

    diagram.addNodes([from, to]);
    diagram.linkNodes(from, to);
    expect(diagram.links.length).toBe(1);
  });
});

describe('starterNodes', () => {
  it('returns all starter nodes', () => {
    class StarterNode extends Node {
      start() {
        return Promise.resolve();
      }
    }

    const diagram = new Diagram();
    const create = new StarterNode();
    const other = new Node();
    diagram.addNodes([create, other]);
    expect(diagram.starterNodes()).toEqual([create]);
  });
});

describe('start', () => {
  it('starts all starter nodes', () => {
    class StarterNode extends Node {
      start() {
        return Promise.resolve();
      }
    }

    const diagram = new Diagram();
    const create = new StarterNode();
    const other = new Node();
    diagram.addNodes([create, other]);
    diagram.start();
  });
});
