import React from 'react';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Text from '../../components/atoms/Text';
import Icon from '../../components/atoms/Icon';

/**
 * Renders a list of services links
 */
export default function Footer(): ReactElement {
  return (
    <Div margin="20px 0">
      <Div display="flex" justifyContent="center">
        <Div display="flex" alignItems="center" marginRight="30px">
          <Icon fill="red" id="arrowDown" height="30px" />
          <Text marginLeft="15px">Puyo tombe</Text>
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
          <Div>
            <Text>A</Text>
            <Text marginLeft="15px">Rotate Left</Text>
          </Div>
          <Div>
            <Text>S</Text>
            <Text marginLeft="15px">Rotate Right</Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
