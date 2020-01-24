import { unsafeHashHost } from './unsafeHashHost';

test('some random result', () => {
  expect(unsafeHashHost('G97VVY1', 8)).toBe('gamerash')
});
