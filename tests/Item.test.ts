import { Item } from '../src/Item';

describe('constructor', () => {
  it('can instanciate with null', () => {
    const item = new Item(null);
    expect(item).toBeInstanceOf(Item);
  });

  it('can instanciate with object', () => {
    const item = new Item({});
    expect(item).toBeInstanceOf(Item);
  });
});

describe('serialize & deserialize', () => {
  const inputs = [
    { input: null },
    { input: 1 },
    { input: 'a' },
    { input: 'abc' },
    { input: {} },
    { input: { a: 1 } },
    { input: [] },
    { input: [1] },
  ];
  it.each(inputs)('returns a JSON object', ({ input }) => {
    const item = new Item(input);
    const json = item.serialize();
    const recreated = Item.deserialize(json);
    expect(recreated).toEqual(item);
  });
});
