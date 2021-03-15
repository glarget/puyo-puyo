/**
 * returns the new board state when a puyo falls into the board
 */
export default function detectFall(board: any[]): number[] {
  const newBoard = board.reverse();
  newBoard.forEach((line: number[], lineIndex: number) => {
    line.forEach((cell: number, cellIndex: string | number) => {
      if (cell === 0) {
        for (let index = lineIndex + 1; index < board.length; index += 1) {
          if (newBoard[index][cellIndex] > 0 && newBoard[lineIndex][cellIndex] === 0) {
            newBoard[lineIndex][cellIndex] = newBoard[index][cellIndex];
            newBoard[index][cellIndex] = 0;
          }
        }
      }
    });
  });
  return newBoard.reverse();
}
