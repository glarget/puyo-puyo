import _ from 'lodash';

export default function searchLinks(board, lineIndex: number, cellIndex: number, list) {
  if (
    lineIndex - 1 >= 0 &&
    board[lineIndex - 1][cellIndex] === board[lineIndex][cellIndex] &&
    list.some((e) => _.isEqual(e, [lineIndex - 1, cellIndex])) < 1
  ) {
    list.push([lineIndex - 1, cellIndex]);
    searchLinks(board, lineIndex - 1, cellIndex, list);
  }
  if (
    cellIndex + 1 < 6 &&
    board[lineIndex][cellIndex + 1] === board[lineIndex][cellIndex] &&
    list.some((e) => _.isEqual(e, [lineIndex, cellIndex + 1])) < 1
  ) {
    list.push([lineIndex, cellIndex + 1]);
    searchLinks(board, lineIndex, cellIndex + 1, list);
  }
  if (
    lineIndex + 1 < 12 &&
    board[lineIndex + 1][cellIndex] === board[lineIndex][cellIndex] &&
    list.some((e) => _.isEqual(e, [lineIndex + 1, cellIndex])) < 1
  ) {
    list.push([lineIndex + 1, cellIndex]);
    searchLinks(board, lineIndex + 1, cellIndex, list);
  }
  if (
    cellIndex - 1 >= 0 &&
    board[lineIndex][cellIndex - 1] === board[lineIndex][cellIndex] &&
    list.some((e) => _.isEqual(e, [lineIndex, cellIndex - 1])) < 1
  ) {
    list.push([lineIndex, cellIndex - 1]);
    searchLinks(board, lineIndex, cellIndex - 1, list);
  }
  return list;
}
