import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  fontSize,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  TypographyProps,
  typography,
} from 'styled-system';

type TextProps = LayoutProps &
  ColorProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  TypographyProps;

export const TextWrapper = styled.span<TextProps>`
  ${compose(border, color, flexbox, fontSize, layout, position, space, typography)};
`;

export default TextWrapper;
