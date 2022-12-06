import { readFileSync } from 'fs';

export const file = readFileSync(`${__dirname}/input`).toString();

export const sample = readFileSync(`${__dirname}/sample`)
  .toString()
  .split('\n')
  .filter((v) => !!v);

const solve = (dataset: string, requiredUniques: number) =>
  [...dataset]
    .map((_, index, chars) => {
      const set = new Set(chars.slice(index, index + requiredUniques));

      return set.size === requiredUniques ? index + requiredUniques : undefined;
    })
    .filter((v) => !!v)[0];

export const solution = {
  step1: (dataset = file) => {
    return solve(dataset, 4);
  },

  step2: (dataset = file) => {
    return solve(dataset, 14);
  },
};

console.log('Results', { step1: solution.step1(), step2: solution.step2() });
