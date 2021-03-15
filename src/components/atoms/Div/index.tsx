import React from 'react';
import type {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type { ElementType, ReactElement } from 'react';

import { DivWrapper } from './Div.style';

type Props = BorderProps &
  BoxShadowProps &
  ColorProps &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  TypographyProps & {
    children: string | ReactElement | ReactElement[];
    as?: ElementType;
  };

/**
 * Renders a generic Div with styled-system props
 */
export default function Div({ children, as, ...rest }: Props): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DivWrapper as={as} {...rest}>
      {children}
    </DivWrapper>
  );
}
