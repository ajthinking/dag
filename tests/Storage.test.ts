import { Item } from '../src/Item';
import { Storage } from '../src/Storage';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new Storage()).toBeInstanceOf(Storage);
  });
});

describe('set', () => {
  it('can set and get items', () => {
    const storage = new Storage();
    const key = 'foo';
    const items = [new Item(null)];

    storage.set(key, items);
    expect(storage.get(key)).toBe(items);
  });

  it('can attempt to get a missing key', () => {
    const storage = new Storage();
    const key = 'foo';

    expect(storage.get(key)).toBe(undefined);
  });
});
