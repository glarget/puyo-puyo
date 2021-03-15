import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import type { ReactElement } from 'react';

import Button from '../../components/atoms/Button';
import Div from '../../components/atoms/Div';
import Title from '../../components/atoms/Title';
import RulesModal from '../RulesModal';

/**
 * Renders the Puyo with the logo, a audio tag and a rules button
 */
export default function Header(): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  function handleClickRules() {
    setModalOpen(!modalOpen);
  }

  return (
    <Div
      backgroundColor="white"
      alignItems="center"
      display="flex"
      padding={{ _: '15px 22px', md: '15px 150px' }}
    >
      <Div display="flex" alignItems="center">
        <Title fontSize="40px">PUYO PUYO</Title>
      </Div>
      <Div marginLeft="auto" display="flex">
        <ReactAudioPlayer src="/audio/tetris.ogg" autoPlay={false} controls />
        <Button marginLeft="15px" backgroundColor="red" color="white" onClick={handleClickRules}>
          Règles du jeu
        </Button>
      </Div>
      {modalOpen ? <RulesModal onClick={handleClickRules} /> : null}
    </Div>
  );
}
