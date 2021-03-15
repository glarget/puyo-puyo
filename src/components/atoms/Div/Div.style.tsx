import styled from 'styled-components';
import {
  border,
  BorderProps,
  boxShadow,
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
  typography,
  TypographyProps,
} from 'styled-system';

type DivProps = LayoutProps &
  ColorProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  TypographyProps;

export const DivWrapper = styled.div<DivProps>`
  box-sizing: border-box;
  ${compose(border, boxShadow, color, flexbox, fontSize, layout, position, space, typography)};
`;

export default DivWrapper;
