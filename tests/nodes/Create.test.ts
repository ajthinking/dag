import { Create } from '../../src/nodes/Create';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Create()).toBeInstanceOf(Create);
  });
});
