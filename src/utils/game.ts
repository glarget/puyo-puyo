/**
 * checks if we have space on the board otherwise it is a game over
 */
export const isSpaceInBoard = (board: any[]) => {
  // return true or false if just one case is > 0 (full) and the next is 0 (empty)
  board.some((line, lineIndex) =>
    line.some(
      (cell: number, cellIndex: string | number) =>
        lineIndex + 1 < board.length && cell > 0 && board[lineIndex + 1][cellIndex] === 0,
    ),
  );
};

/**
 * checks if it is a game over status
 */
export const isGameOver = (board) => board[0][2];
