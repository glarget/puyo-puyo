import React from 'react';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Text from '../../components/atoms/Text';
import Icon from '../../components/atoms/Icon';

/**
 * Render a description of user possible keyboard interactions
 */
export default function Footer(): ReactElement {
  return (
    <Div margin="20px 0">
      <Div display="flex" justifyContent="center">
        <Div display="flex" alignItems="center" marginRight="30px">
          <Icon fill="red" id="arrowDown" height="30px" />
          <Text marginLeft="15px">Chute Puyo</Text>
        </Div>
        <Div display="flex" alignItems="center" marginRight="30px">
          <Icon fill="red" id="arrowRight" height="30px" />
          <Text marginLeft="15px">Déplacement à droite</Text>
        </Div>
        <Div display="flex" alignItems="center" marginRight="30px">
          <Icon fill="red" id="arrowLeft" height="30px" />
          <Text marginLeft="15px">Déplacement à gauche</Text>
        </Div>
        <Div display="flex" alignItems="center" flexDirection="column">
          <Div width="100%">
            <Text color="blue">A</Text>
            <Text marginLeft="15px">Rotation aiguille</Text>
          </Div>
          <Div width="100%">
            <Text color="blue">S</Text>
            <Text marginLeft="15px">Rotation inverse</Text>
          </Div>
          <Div width="100%">
            <Text color="blue">R</Text>
            <Text marginLeft="15px">Rejouer</Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
