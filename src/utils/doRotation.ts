interface PieceProps {
  id?: number;
  x: number;
  y: number;
  color?: number;
  position?: number;
}

/**
 * Rotate the puyo depending on the keyboard interaction
 */
export default function doRotation(
  pos: number,
  pieceOne: PieceProps,
  pieceTwo: PieceProps,
  board: number[][],
): PieceProps {
  switch (pos) {
    case 0: {
      if (
        pieceOne.y + 50 > 545 ||
        board[Math.ceil(pieceOne.y / 50) + 1][Math.floor(pieceOne.x / 50)] > 0
      ) {
        return pieceTwo;
      }
      return {
        ...pieceTwo,
        x: pieceOne.x,
        y: pieceOne.y + 50,
        position: pos,
      };
    }
    case 1: {
      if (
        pieceTwo.x <= 0 ||
        (Math.floor(pieceOne.x / 50) - 1 >= 0 &&
          pieceOne.y >= 0 &&
          board[Math.ceil(pieceOne.y / 50)][Math.floor(pieceOne.x / 50) - 1] > 0)
      ) {
        return pieceTwo;
      }
      return {
        ...pieceTwo,
        x: pieceOne.x - 50,
        y: pieceOne.y,
        position: pos,
      };
    }
    case 2: {
      return {
        ...pieceTwo,
        x: pieceOne.x,
        y: pieceOne.y - 50,
        position: pos,
      };
    }
    case 3: {
      if (
        pieceTwo.x >= 250 ||
        (Math.floor(pieceOne.x / 50) + 1 < 6 &&
          pieceOne.y >= 0 &&
          board[Math.ceil(pieceOne.y / 50)][Math.ceil(pieceOne.x / 50) + 1] > 0)
      ) {
        return pieceTwo;
      }
      return {
        ...pieceTwo,
        x: pieceOne.x + 50,
        y: pieceOne.y,
        position: pos,
      };
    }
    default:
      return pieceTwo;
  }
}
