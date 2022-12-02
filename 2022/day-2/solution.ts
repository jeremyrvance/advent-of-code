import { readFileSync } from 'fs';

const file = readFileSync(`${__dirname}/input`)
  .toString()
  .split('\n')
  .filter((v) => !!v);

const moves = Object.assign.apply(
  {},
  ['A', 'B', 'C'].map((move, index, moves) => ({
    [move]: {
      win: moves[(index + 1) % moves.length],
      lose: moves[(index + 2) % moves.length],
      draw: move,
      score: index + 1,
    },
  })),
);

const scenarioScore = { win: 6, draw: 3, lose: 0 };

const requiredResults = { X: 'lose', Y: 'draw', Z: 'win' };

const xyzToAbc = (char) => String.fromCharCode(char.charCodeAt(0) - 23);

export const solution = {
  step1: () => {
    return file
      .map((score) => {
        const [theirs, mine] = score.split(' ');

        const move = moves[theirs];
        const myMove = moves[xyzToAbc(mine)];
        const result = Object.keys(move).find(
          (key) => move[key] === xyzToAbc(mine),
        );

        return myMove.score + scenarioScore[result];
      })
      .reduce((acc, val) => acc + val);
  },
  step2: () => {
    return file
      .map((score) => {
        const [theirs, required] = score.split(' ');

        const result = requiredResults[required];
        const move = moves[theirs][result];

        return moves[move].score + scenarioScore[result];
      })
      .reduce((acc, val) => acc + val);
  },
};

console.log('Results', { step1: solution.step1(), step2: solution.step2() });
