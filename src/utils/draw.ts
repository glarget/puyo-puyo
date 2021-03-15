import { PUYO_COLORS } from '../constants';

import type { GameReducerState } from '../reducer/game';

interface GameProps {
  piece: {
    color: string | number;
    x: number;
    y: number;
  };
  board: any;
  score: number;
  combo: number;
  nextPieces: number[][];
}

/**
 * renders the Puyo canvas game
 */
export function drawCanvas(game: GameReducerState, ctx): void {
  ctx.clearRect(0, 0, 500, 600);
  ctx.strokeRect(0, 0, 300, 600);
  if (game.nextPieces) {
    ctx.fillStyle = 'black';
    ctx.font = '15px Days One';
    ctx.textAlign = 'start';

    // ROUNDS
    ctx.beginPath();
    ctx.fillStyle = PUYO_COLORS[game.nextPieces[0][0]];
    ctx.arc(350, 50, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = PUYO_COLORS[game.nextPieces[0][1]];
    ctx.arc(350, 100, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  if (game.piece) {
    game.piece.forEach((item: GameProps['piece']) => {
      // ROUNDS
      ctx.beginPath();
      ctx.fillStyle = PUYO_COLORS[item.color];
      ctx.arc(item.x + 25, item.y, 25, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();
    });
    game.board.forEach((line: number[], indexLine: number) => {
      line.forEach((cell: number, indexColumn: number) => {
        if (cell > 0) {
          // ROUNDS
          ctx.beginPath();
          ctx.fillStyle = PUYO_COLORS[cell];
          ctx.arc(indexColumn * 50 + 25, indexLine * 52, 25, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.stroke();
        }
      });
    });
  }
}

/**
 * renders the Puyo game over status
 */
export function drawGameOver(game: GameProps, ctx): void {
  ctx.clearRect(0, 0, 500, 600);

  const img = new Image();
  img.src = '/img/looser.png';

  img.onload = () => {
    ctx.drawImage(img, 140, 70, 120, 120);
  };

  ctx.fillStyle = '#4A62F0';
  ctx.font = '26px Days One';
  ctx.textAlign = 'center';
  ctx.fillText('OH NOOO !!!', 200, 243);
  ctx.fillText(`Vos winams: ${game.score}`, 200, 293);
  ctx.fillText('Pressez R pour rejouer', 200, 343);

  ctx.fillStyle = '#d21a1d';
  ctx.fillText('Gros grain, gros respect', 200, 450);
}

/**
 * renders the Puyo chain status
 */
export function drawChain(game: GameReducerState, reactionList, ctx): void {
  reactionList.forEach((line: number[][]) => {
    line.forEach((cell: number[]) => {
      ctx.fillStyle = '#D94EB1';
      ctx.beginPath();
      ctx.arc(cell[1] * 50 + 25, cell[0] * 50 + 25, 25, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.stroke();
    });
  });
  ctx.fillStyle = '#D94EB1';
  ctx.font = '42px Days One';
  ctx.textAlign = 'center';

  const img = new Image();
  img.src = '/img/winner.png';

  img.onload = () => {
    ctx.drawImage(img, 110, 130, 90, 90);
  };

  ctx.fillText('YEAHHH !!', 150, 270);
}
