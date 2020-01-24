import { unsafeHashHost } from './unsafeHashHost';

test.each([
  ['G97VVY1', 'gamerash'],
  ['VMware-56 4d 18 de 52 41 ac 4b-01 85 94 e1 0e 71 83 48', 'plusmost'],
  ['C07YG0X0JYW0', 'neonecho']
])('test %s and 8-char limit results in %s', (input, expected) => {
  expect(unsafeHashHost(input, 8)).toBe(expected)
});
