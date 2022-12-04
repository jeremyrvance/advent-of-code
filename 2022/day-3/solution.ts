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
      .map((rucksack) => {
        const front = new Set(rucksack.slice(0, rucksack.length / 2));
        const back = new Set(
          rucksack.slice(rucksack.length / 2, rucksack.length),
        );

        const sameItem = [...front.keys()].find((item) => back.has(item));

        return sameItem.toUpperCase() === sameItem
          ? sameItem.charCodeAt(0) - 38
          : sameItem.charCodeAt(0) - 96;
      })
      .reduce((acc, value) => acc + value),
  step2: (dataset = file) =>
    dataset
      .reduce((acc, item, index) => {
        const i = Math.floor(index / 3);
        if (!acc[i]) {
          acc[i] = [];
        }
        acc[i].push(item.trim());
        return acc;
      }, [])
      .map((rucksacks) => {
        const [first, second, third] = rucksacks.map(
          (rucksack) => new Set(rucksack),
        );

        const sameItem = [...first.keys()].find(
          (item) => second.has(item) && third.has(item),
        );

        return sameItem.toUpperCase() === sameItem
          ? sameItem.charCodeAt(0) - 38
          : sameItem.charCodeAt(0) - 96;
      })
      .reduce((acc, value) => acc + value),
};

console.log('Results', { step1: solution.step1(), step2: solution.step2() });
