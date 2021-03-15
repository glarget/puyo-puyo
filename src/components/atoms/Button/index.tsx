import React from 'react';
import type { ReactElement } from 'react';

import { ButtonWrapper } from './Button.style';

/**
 * Renders a generic Button with styled-system props
 */
export default function Button({ children, variant, ...rest }: any): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper variant={variant} {...rest}>
      {children}
    </ButtonWrapper>
  );
}
