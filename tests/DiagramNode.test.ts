import { DiagramNode } from '../src/DiagramNode';
import { InPort } from '../src/InPort';
import { Node, NodeInput } from '../src/Node';
import { Create } from '../src/nodes/Create';
import { DoNothing } from '../src/nodes/DoNothing';
import { OutPort } from '../src/OutPort';
import { Port } from '../src/Port';
import { ConcreteNode } from './ConcreteNode';
import { ConcreteDiagramNode } from './ConcreteDiagramNode';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new ConcreteDiagramNode()).toBeInstanceOf(
      ConcreteDiagramNode,
    );
  });

  // it('can instanciate with a itemStorage', () => {
  //   expect(new ConcreteDiagramNode()).toBeInstanceOf(
  //     ConcreteDiagramNode,
  //   );
  // });
});

describe('addNode', () => {
  it('can add a single node', () => {
    const diagram = new ConcreteDiagramNode();
    const node = new ConcreteNode();
    diagram.addNode(node);
    expect(diagram.nodes).toContain(node);
  });
});

describe('addNodes', () => {
  it('can add multiple nodes', () => {
    const diagram = new ConcreteDiagramNode();
    const nodes = [new ConcreteNode(), new ConcreteNode()];
    diagram.addNodes(nodes);
    expect(diagram.nodes.length).toBe(2);
  });
});

describe('linkPorts', () => {
  it('can link two ports', () => {
    const diagram = new ConcreteDiagramNode();
    const from = new OutPort();
    const to = new InPort();
    diagram.linkPorts(from, to);
    expect(diagram.links.length).toBe(1);
  });
});

describe('linkNodes', () => {
  it('can link two nodes', () => {
    const diagram = new ConcreteDiagramNode();
    const from = new ConcreteNode();
    const to = new ConcreteNode();

    diagram.addNodes([from, to]);
    diagram.linkNodes(from, to);
    expect(diagram.links.length).toBe(1);
  });
});

describe('starterNodes', () => {
  it('returns all starter nodes', () => {
    class StarterNode extends ConcreteNode {
      start() {
        return Promise.resolve();
      }
    }

    const diagram = new ConcreteDiagramNode();
    const create = new StarterNode();
    const other = new ConcreteNode();
    diagram.addNodes([create, other]);
    expect(diagram.starterNodes()).toEqual([create]);
  });
});
