import { rxjsSolution, solution } from './solution';

test('Day 1', async () => {
  expect(solution(1)).toEqual(72070);
  expect(solution(3)).toEqual(211805);
  expect(await rxjsSolution(1)).toEqual(72070);
  expect(await rxjsSolution(3)).toEqual(211805);
});
