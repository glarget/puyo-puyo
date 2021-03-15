import React from 'react';
import type { ReactElement } from 'react';

import Button from '../../components/atoms/Button';
import Div from '../../components/atoms/Div';
import Title from '../../components/atoms/Title';

export default function Header(): ReactElement {
  return (
    <Div alignItems="center" display="flex" padding={{ _: '15px 22px', md: '15px 150px' }}>
      <Div display="flex" alignItems="center">
        <Title as="h1" fontFamily="montSerratSemiBold" fontSize="40px">
          PUYO PUYO
        </Title>
      </Div>
      <Div marginLeft="auto">
        <Button marginLeft="15px" backgroundColor="green" color="white">
          Règles du jeu
        </Button>
      </Div>
    </Div>
  );
}
