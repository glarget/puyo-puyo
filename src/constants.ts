interface PuyoProps {
  [key: number]: string;
}

export const PUYO_COLORS: PuyoProps = {
  1: '#8AD64A', // Conifer
  2: '#43B1D6', // Shakespeare
  3: '#Eb4b32', // Cinnabar
  4: '#F5DD45', // Starship
};

export const FALL_PIECE = 'FALL_PIECE';
export const FALL_BOARD = 'FALL_BOARD';
export const MOVE_PIECE = 'MOVE_PIECE';
export const COLLISION = 'COLLISION';
export const CHAIN = 'CHAIN';
export const GAME_OVER = 'GAME_OVER';

export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ROTATE_RIGHT = 'ROTATE_RIGHT';
export const ROTATE_LEFT = 'ROTATE_LEFT';
export const RELOAD = 'RELOAD';
export const PAUSE = 'PAUSE';

export const KEY = {
  32: PAUSE,
  82: RELOAD,
  37: MOVE_LEFT,
  39: MOVE_RIGHT,
  40: MOVE_DOWN,
  65: ROTATE_LEFT,
  83: ROTATE_RIGHT,
};

export const INITIAL_STATE = {
  piece: [
    {
      id: 1,
      x: 100,
      y: -50,
      color: Math.floor(Math.random() * 4 + 1),
      position: -1,
    },
    {
      id: 2,
      x: 100,
      y: 0,
      color: Math.floor(Math.random() * 4 + 1),
      position: 0,
    },
  ],
  board: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  nextPieces: [
    [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)],
    [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)],
  ],
  pause: false,
  score: 0,
  combo: 1,
  gameOver: false,
  startTimer: new Date().getTime() + 240000,
  timer: 240000,
};

export const GAME_SPEED_TIMER = 60;
