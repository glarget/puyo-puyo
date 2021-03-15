/**
 * returns the new board state when a puyos chain is formed
 */
export default function detectChain(reaction: any[], board: number[][]): number[][] {
  const newBoard = board;
  reaction.forEach((ch) =>
    ch.forEach((cell: number[]) => {
      newBoard[cell[0]][cell[1]] = 0;
    }),
  );

  return newBoard;
}
