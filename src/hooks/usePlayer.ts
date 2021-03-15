import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

/**
 * returns the player initial state
 */
export default function usePlayer(): [
  { name: string; character: string },
  Dispatch<SetStateAction<{ name: string; character: string; level: number }>>,
] {
  const initialState = {
    name: '',
    character: '',
    level: 1,
  };

  return useState(initialState);
}
