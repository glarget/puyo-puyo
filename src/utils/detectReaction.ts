import _ from 'lodash';
import searchLinks from './searchLinks';

/**
 * updates the puyo board list when a chain is formed
 */
export default function detextReaction(board: number[][]): number[][] {
  const list = [];
  board.forEach((line, lineIndex) => {
    line.forEach((cell, cellIndex) => {
      if (cell > 0 && list.some((e) => e.some((e2) => _.isEqual(e2, [lineIndex, cellIndex]))) < 1) {
        list.push(searchLinks(board, lineIndex, cellIndex, [[lineIndex, cellIndex]]));
      }
    });
  });
  const result = list.filter((chain) => chain.length > 3);
  return result;
}
