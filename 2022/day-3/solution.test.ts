import { sample, solution } from './solution';

test('Day 3', async () => {
  expect(solution.step1(sample)).toBe(157);
  expect(solution.step2(sample)).toBe(70);
  expect(solution.step1()).toBe(7597);
  expect(solution.step2()).toBe(2607);
});
