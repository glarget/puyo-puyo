/**
 * returns the new board state when a puyo collision is detected
 */
export default function detectCollision(piece: any[], board: any[]): number[] {
  const newBoard = board.reverse();
  piece.sort((a, b) => {
    if (a.y > b.y) return -1;
    if (a.y < b.y) return 1;
    return 0;
  });
  piece.forEach((item) => {
    let placed = false;
    board.forEach((line, index) => {
      if (line[item.x / 50] === 0 && placed === false) {
        newBoard[index][item.x / 50] = item.color;
        placed = true;
      }
    });
  });
  return newBoard.reverse();
}
