import { sample, solution } from './solution';

test('Day 6', async () => {
  expect(solution.step1(sample[0])).toBe(7);
  expect(solution.step2(sample[0])).toBe(19);
  expect(solution.step1(sample[1])).toBe(5);
  expect(solution.step2(sample[1])).toBe(23);
  expect(solution.step1(sample[2])).toBe(6);
  expect(solution.step2(sample[2])).toBe(23);
  expect(solution.step1(sample[3])).toBe(10);
  expect(solution.step2(sample[3])).toBe(29);
  expect(solution.step1(sample[4])).toBe(11);
  expect(solution.step2(sample[4])).toBe(26);
  expect(solution.step1()).toBe(1287);
  expect(solution.step2()).toBe(3716);
});
