import { uid } from '../../src/utils/uid';

it('returns a string', () => {
  expect(typeof uid()).toBe('string');
});
