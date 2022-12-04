import { solution, sample } from './solution';

test('Day 4', async () => {
  expect(solution.step1(sample)).toBe(2);
  expect(solution.step2(sample)).toBe(4);
  expect(solution.step1()).toBe(450);
  expect(solution.step2()).toBe(837);
});
