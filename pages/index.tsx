import React, { useState } from 'react';
import type { ReactElement, SyntheticEvent } from 'react';

import MainLayout from '../src/layout/MainLayout';
import Game from '../src/views/Game';
import usePlayer from '../src/hooks/usePlayer';
import Starter from '../src/views/Starter';

export default function PuyoGame(): ReactElement {
  const [start, setStart] = useState(false);
  const [player, setPlayer] = usePlayer();

  function handleInputChange(e: SyntheticEvent<HTMLInputElement>): void {
    const { value } = e.target as HTMLInputElement;

    setPlayer((current) => ({
      ...current,
      name: value,
    }));
  }

  /**
   * updates the player level depending based on three levels : 1, 2 or 3
   */
  function handleSelectLevel(e: SyntheticEvent<HTMLInputElement>): void {
    const { value } = e.target as HTMLInputElement;

    setPlayer((current) => ({
      ...current,
      level: parseInt(value, 10),
    }));
  }

  /**
   * updates the player character depending based on three characters
   */
  function handleSelectChange(e: SyntheticEvent<HTMLSelectElement>): void {
    const { value } = e.target as HTMLInputElement;

    setPlayer((current) => ({
      ...current,
      character: value,
    }));
  }

  /**
   * updates the start state
   *
   * false => we render the `Starter` component
   * true  => we render the `Game` component
   */
  function handleClickButton(): void {
    setStart(true);
  }

  return (
    <MainLayout>
      <>
        {!start ? (
          <Starter
            onSelectChange={handleSelectChange}
            onInputChange={handleInputChange}
            onButtonClick={handleClickButton}
            onSelectLevelChange={handleSelectLevel}
          />
        ) : (
          <Game player={player} />
        )}
      </>
    </MainLayout>
  );
}
