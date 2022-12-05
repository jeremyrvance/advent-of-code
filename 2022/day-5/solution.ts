import { readFileSync } from 'fs';

export const file = readFileSync(`${__dirname}/input`)
  .toString()
  .split('\n\n')
  .filter((v) => !!v);

export const sample = readFileSync(`${__dirname}/sample`)
  .toString()
  .split('\n\n')
  .filter((v) => !!v);

const createStacks = (matrix: string[]) => {
  const stack = [];

  matrix
    .pop() // Remove the numbers from the bottom of the starting matrix
    .split(' ') // We want to keep the empty strings in so we keep the indexes of the numbers
    .forEach((number, index) => {
      if (number === '') return;
      if (!stack[number]) stack[number] = [];

      matrix.forEach((line) => {
        const val = line[index + Number(number) - 1]?.trim();
        if (!!val) stack[number].push(val);
      });

      stack[number]?.reverse();
    });

  return stack.filter((v) => !!v);
};

const solve = (dataset: string[], orderedStacking = false) => {
  const [matrix, instructions] = dataset;
  const stacks = createStacks(matrix.split('\n'));

  instructions
    .split('\n')
    .map((instruction: string) =>
      Array.from(instruction.matchAll(/\d+/g), (d) => Number(d)),
    )
    .forEach((move: [number, number, number]) => {
      const [number, from, to] = move;
      const items = [];

      for (let i = 0; i < number; i++) items.push(stacks[from - 1].pop());

      stacks[to - 1].push(...(orderedStacking ? items.reverse() : items));
    });

  return stacks.map((stack) => stack.reverse()[0]).join('');
};
export const solution = {
  step1: (dataset = file) => {
    return solve(dataset);
  },

  step2: (dataset = file) => {
    return solve(dataset, true);
  },
};

console.log('Results', { step1: solution.step1(), step2: solution.step2() });
