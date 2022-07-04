import { Port } from '../src/Port';

describe('constructor', () => {
  it('can instanciate without a parent', () => {
    const port = new Port({});
    expect(port.parent).toStrictEqual(undefined);
  });
});
