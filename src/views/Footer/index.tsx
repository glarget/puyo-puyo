import React from 'react';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Text from '../../components/atoms/Text';

/**
 * Renders a list of services links
 */
export default function Footer(): ReactElement {
  return (
    <Div textAlign="center" height="20px">
      <Text as="p" textAlign="center">
        Footer(non intégré)
      </Text>
    </Div>
  );
}
