import { sample, solution } from './solution';

test('Day 5', async () => {
  expect(solution.step1(sample)).toBe('CMZ');
  expect(solution.step2(sample)).toBe('MCD');
  expect(solution.step1()).toBe('SHMSDGZVC');
  expect(solution.step2()).toBe('VRZGHDFBQ');
});
