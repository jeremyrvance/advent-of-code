import { readFileSync } from 'fs';
import {
  concatAll,
  concatMap,
  from,
  lastValueFrom,
  map,
  scan,
  take,
  toArray,
} from 'rxjs';

const file = readFileSync(`${__dirname}/input`)
  .toString()
  .split('\n\n')
  .map((data) => data.split('\n'));

const solution = (topNumber: number) => {
  return file
    .map((data) => data.reduce((a, b) => Number(a) + Number(b), 0))
    .sort((a, b) => b - a)
    .slice(0, topNumber)
    .reduce((a, b) => a + b);
};

const rxjsSolution = async (topNumber: number) => {
  const stream$ = from(file).pipe(
    concatMap((val) =>
      from(val).pipe(scan((acc, value) => acc + Number(value), 0))
    ),
    toArray(),
    map((arr) => arr.sort((a, b) => b - a)),
    concatAll(),
    take(topNumber),
    toArray()
  );

  return (await lastValueFrom(stream$)).reduce((a, b) => a + b);
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
