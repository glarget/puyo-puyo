import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  fontSize,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  TypographyProps,
  typography,
} from 'styled-system';

type TitleProps = ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  TypographyProps;

// eslint-disable-next-line import/prefer-default-export
export const TitleWrapper = styled.h1<TitleProps>`
  font-family: 'MontSerrat';
  ${compose(border, color, flexbox, fontSize, layout, position, space, typography)};
`;
