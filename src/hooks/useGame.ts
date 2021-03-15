import { useReducer } from 'react';
import type { Dispatch } from 'react';

import gameReducer from '../reducer/game';
import { INITIAL_STATE } from '../constants';
import type { ActionProps, GameReducerState } from '../reducer/game';

interface GameProps {
  game: GameReducerState;
  dispatch: Dispatch<ActionProps | undefined>;
}

/**
 * Return based the game state based on the dispatch of actions
 */
export default function useGame(): GameProps {
  const [game, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return { game, dispatch };
}
