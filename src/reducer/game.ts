import {
  PAUSE,
  MOVE_PIECE,
  RELOAD,
  MOVE_RIGHT,
  MOVE_LEFT,
  MOVE_DOWN,
  ROTATE_LEFT,
  FALL_PIECE,
  FALL_BOARD,
  COLLISION,
  CHAIN,
  GAME_OVER,
  ROTATE_RIGHT,
  INITIAL_STATE,
} from '../constants';
import detectChain from '../utils/detectChain';
import detectCollision from '../utils/detectCollision';
import detectFall from '../utils/detectFall';
import doRotation from '../utils/doRotation';
import score from '../utils/score';

export interface GameReducerState {
  pause: boolean;
  startTimer: number;
  piece: { id: number; x: number; y: number; color: number; position: number }[];
  board: number[][];
  nextPieces: number[][];
  score: number;
  combo: number;
  gameOver: boolean;
  timer: number;
}

interface Piece {
  PAUSE: typeof PAUSE;
  MOVE_PIECE: typeof MOVE_PIECE;
  RELOAD: typeof RELOAD;
  MOVE_RIGHT: typeof MOVE_RIGHT;
  MOVE_LEFT: typeof MOVE_LEFT;
  MOVE_DOWN: typeof MOVE_DOWN;
  ROTATE_LEFT: typeof ROTATE_LEFT;
  FALL_PIECE: typeof FALL_PIECE;
  FALL_BOARD: typeof FALL_BOARD;
  COLLISION: typeof COLLISION;
  CHAIN: typeof CHAIN;
  GAME_OVER: typeof GAME_OVER;
  ROTATE_RIGHT: typeof ROTATE_RIGHT;
}

export interface ActionProps {
  piece(piece: any, board: number[][]): number[][];
  reaction(reaction: any, board: number[][]): number[][];
  type: keyof Piece;
  move: keyof Piece;
}

/**
 * Returns a derived state of the game depending on the action type and action move
 */
export default function gameReducer(
  state = INITIAL_STATE,
  action: ActionProps = {
    type: FALL_PIECE,
    move: FALL_PIECE,
  },
): GameReducerState {
  switch (action.type) {
    case MOVE_PIECE:
      switch (action.move) {
        case PAUSE:
          if (state.gameOver) {
            return {
              ...state,
              pause: false,
            };
          }
          return {
            ...state,
            pause: !state.pause,
            startTimer: new Date().getTime() + 240000 - (240000 - state.timer),
          };
        case RELOAD:
          return {
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
        case MOVE_RIGHT:
          if (
            state.piece[0].x >= 250 ||
            state.piece[1].x >= 250 ||
            state.board[Math.abs(Math.ceil(state.piece[0].y / 50))][state.piece[0].x / 50 + 1] >
              0 ||
            state.board[Math.abs(Math.ceil(state.piece[1].y / 50))][state.piece[1].x / 50 + 1] >
              0 ||
            state.combo > 1
          ) {
            return state;
          }
          return {
            ...state,
            piece: state.piece.map((item) => ({
              ...item,
              x: item.x + 50,
            })),
          };
        case MOVE_LEFT:
          if (
            state.piece[0].x <= 0 ||
            state.piece[1].x <= 0 ||
            state.board[Math.abs(Math.ceil(state.piece[0].y / 50))][state.piece[0].x / 50 - 1] >
              0 ||
            state.board[Math.abs(Math.ceil(state.piece[1].y / 50))][state.piece[1].x / 50 - 1] >
              0 ||
            state.combo > 1
          ) {
            return state;
          }
          return {
            ...state,
            piece: state.piece.map((item) => ({
              ...item,
              x: item.x - 50,
            })),
          };
        case MOVE_DOWN:
          if (state.combo > 1) {
            return state;
          }
          return {
            ...state,
            piece: [
              {
                id: 1,
                x: 100,
                y: -50,
                color: state.nextPieces[0][0],
                position: -1,
              },
              {
                id: 2,
                x: 100,
                y: 0,
                color: state.nextPieces[0][1],
                position: 0,
              },
            ],
            board: detectCollision(state.piece, state.board),
            nextPieces: [
              state.nextPieces[1],
              [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)],
            ],
            combo: 1,
          };
        case ROTATE_RIGHT:
          if (state.combo > 1) {
            return state;
          }
          return {
            ...state,
            piece: [
              state.piece[0],
              doRotation(
                (state.piece[1].position + 3) % 4,
                state.piece[0],
                state.piece[1],
                state.board,
              ),
            ],
          };
        case ROTATE_LEFT:
          if (state.combo > 1) {
            return state;
          }
          return {
            ...state,
            piece: [
              state.piece[0],
              doRotation(
                (state.piece[1].position + 5) % 4,
                state.piece[0],
                state.piece[1],
                state.board,
              ),
            ],
          };
        default:
          return state;
      }
    case FALL_PIECE:
      return {
        ...state,
        piece: state.piece.map((item) => ({
          ...item,
          y: item.y + 5,
        })),
        timer: state.startTimer - new Date().getTime(),
        combo: 1,
      };
    case FALL_BOARD:
      return {
        ...state,
        board: detectFall(state.board),
      };
    case COLLISION:
      return {
        ...state,
        piece: [
          {
            id: 1,
            x: 100,
            y: -50,
            color: state.nextPieces[0][0],
            position: -1,
          },
          {
            id: 2,
            x: 100,
            y: 0,
            color: state.nextPieces[0][1],
            position: 0,
          },
        ],
        board: detectCollision(action.piece, state.board),
        nextPieces: [
          state.nextPieces[1],
          [Math.floor(Math.random() * 4 + 1), Math.floor(Math.random() * 4 + 1)],
        ],
        combo: 1,
      };
    case CHAIN:
      return {
        ...state,
        board: detectChain(action.reaction, state.board),
        score: state.score + score(action.reaction, state.combo),
        combo: state.combo + 1,
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
      };
    default:
      return state;
  }
}
