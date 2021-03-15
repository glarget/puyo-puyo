import React from 'react';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Logo from '../../components/atoms/Logo';

/**
 * Renders the main logo and the navigation bar
 */
export default function Header(): ReactElement {
  return (
    <>
      <Div alignItems="center" display="flex" padding={{ _: '15px 22px', md: '15px 150px' }}>
        <Div display="flex" alignItems="center">
          <Logo id="meilleureReprise" />
        </Div>
      </Div>
    </>
  );
}
