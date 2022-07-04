import { DiagramNode } from '../src/DiagramNode';
import { Node } from '../src/Node';
import { Create } from '../src/nodes/Create';
import { DoNothing } from '../src/nodes/DoNothing';

class ConcreteNode extends Node {}

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new ConcreteNode()).toBeInstanceOf(ConcreteNode);
  });
});

describe('isStarter', () => {
  it('returns false if node class does not implements method "start"', () => {
    const node = new ConcreteNode();
    expect(node.isStarter()).toBe(false);
  });

  it('returns true if node class does not implements method "start"', () => {
    class StarterNode extends ConcreteNode {
      start() {
        return Promise.resolve();
      }
    }

    const node = new StarterNode();
    expect(node.isStarter()).toBe(true);
  });
});

describe('start', () => {
  // handled by implementations
});
