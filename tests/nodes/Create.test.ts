import { Item } from '../../src/Item';
import { Create } from '../../src/nodes/Create';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Create()).toBeInstanceOf(Create);
  });
});

describe('run', () => {
  it('return itself', async () => {
    const node = new Create();
    const result = await node.run();

    expect(result.id).toEqual(node.id);
  });
});
