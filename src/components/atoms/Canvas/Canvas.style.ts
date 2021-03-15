import styled from 'styled-components';
import {
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  compose,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

type CanvasProps = BoxShadowProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps;

// eslint-disable-next-line import/prefer-default-export
export const CanvasWrapper = styled.canvas<CanvasProps>`
  background: white;
  ${compose(border, boxShadow, flexbox, layout, position, space)};
`;
