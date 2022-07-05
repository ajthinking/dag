import { Item } from '../src/Item';
import { ItemStorage } from '../src/ItemStorage';

describe('constructor', () => {
  it('can instanciate with default settings', () => {
    expect(new ItemStorage()).toBeInstanceOf(ItemStorage);
  });
});

describe('set', () => {
  it('can set and get items', () => {
    const itemStorage = new ItemStorage();
    const key = 'foo';
    const items = [new Item(null)];

    itemStorage.set(key, items);
    expect(itemStorage.get(key)).toBe(items);
  });

  it('can attempt to get a missing key', () => {
    const itemStorage = new ItemStorage();
    const key = 'foo';

    expect(itemStorage.get(key)).toBe(undefined);
  });
});
