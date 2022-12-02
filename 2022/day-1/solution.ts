import { readFileSync } from 'fs';
import {
  concatMap,
  from,
  lastValueFrom,
  reduce,
  scan,
  take,
  toArray,
} from 'rxjs';

const file = readFileSync(`${__dirname}/input`)
  .toString()
  .split('\n\n')
  .map((data) => data.split('\n').map((value) => Number(value)));

export const solution = (topNumber: number): number => {
  return file
    .map((data) => data.reduce((acc, value) => acc + value))
    .sort((a, b) => b - a)
    .slice(0, topNumber)
    .reduce((a, b) => a + b);
};

export const rxjsSolution = async (topNumber: number): Promise<number> => {
  return await lastValueFrom(
    from(file).pipe(
      concatMap((val) => from(val).pipe(scan((acc, value) => acc + value))),
      toArray(),
      concatMap((v) => v.sort((a, b) => b - a)),
      take(topNumber),
      reduce((acc, value) => acc + value),
    ),
  );
};

[
  { name: 'JS Array Methods', func: solution },
  { name: 'RxJS', func: rxjsSolution },
].forEach(async ({ name, func }) => {
  console.log(name, {
    first: await func(1),
    topThree: await func(3),
  });
});
