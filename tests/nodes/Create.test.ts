import { Node } from '../../src/Node';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Node()).toBeInstanceOf(Node);
  });
});
