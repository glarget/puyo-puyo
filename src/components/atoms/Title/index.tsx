import React, { ElementType } from 'react';
import type { ReactNode, ReactElement } from 'react';
import type {
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { TitleWrapper } from './Title.style';

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  FontFamilyProps &
  FontSizeProps &
  TypographyProps & {
    as?: ElementType | undefined;
    children: ReactNode;
  };

/**
 * Renders a generic Title component with styled-system props
 */
export default function Title({ as = 'h1', children, ...rest }: Props): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TitleWrapper as={as} {...rest}>
      {children}
    </TitleWrapper>
  );
}
