import React from 'react';
import type {
  ColorProps,
  FontFamilyProps,
  HeightProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { TextWrapper } from './Text.style';

type Props = ColorProps &
  HeightProps &
  LayoutProps &
  SpaceProps &
  FontFamilyProps &
  TypographyProps & {
    children: ReactNode;
    as?: ElementType;
  };

/**
 * Renders a generic Text component with styled-system props
 */
export default function Text({ children, as, ...rest }: Props): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextWrapper as={as} {...rest}>
      {children}
    </TextWrapper>
  );
}
