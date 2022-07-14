import { Node } from '../src/Node';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Node()).toBeInstanceOf(Node);
  });
});

describe('isStarter', () => {
  it('returns false if node class does not implements method "start"', () => {
    const node = new Node();
    expect(node.isStarter()).toBe(false);
  });

  it('returns true if node class does not implements method "start"', () => {
    class StarterNode extends Node {
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
