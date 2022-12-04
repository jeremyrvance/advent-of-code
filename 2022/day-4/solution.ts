import { readFileSync } from 'fs';

export const file = readFileSync(`${__dirname}/input`)
  .toString()
  .split('\n')
  .filter((v) => !!v);

export const sample = readFileSync(`${__dirname}/sample`)
  .toString()
  .split('\n')
  .filter((v) => !!v);

export const solution = {
  step1: (dataset = file) =>
    dataset
      .map((assignments) => {
        const [first, second] = assignments
          .split(',')
          .map((val) => val.split('-').map((val) => Number(val)));

        const firstIsInsideSecond =
          first[0] >= second[0] && first[1] <= second[1];
        const secondIsInsideFirst =
          first[0] <= second[0] && first[1] >= second[1];

        return Number(firstIsInsideSecond || secondIsInsideFirst);
      })
      .reduce((acc, value) => acc + value),

  step2: (dataset = file) =>
    dataset
      .map((assignments) => {
        const [first, second] = assignments
          .split(',')
          .map((val) => val.split('-').map((val) => Number(val)));

        const firstRange = [...Array(first[1] - first[0] + 1).keys()].map(
          (key) => key + first[0],
        );
        const secondRange = [...Array(second[1] - second[0] + 1).keys()].map(
          (key) => key + second[0],
        );

        const overlap = firstRange
          .map((value) => secondRange.includes(value))
          .map((v) => !!v)
          .includes(true);

        return Number(overlap);
      })
      .reduce((acc, value) => acc + value),
};

console.log('Results', { step1: solution.step1(), step2: solution.step2() });
