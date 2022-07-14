import { SmartMap } from '../../src/utils/SmartMap';

describe('SmartMap', () => {
  it('can manipulate the objects', () => {
    const map = new SmartMap<string, {}>([
      ['first', { name: 'first' }],
      ['second', { name: 'second' }],
    ]);
  });
});
