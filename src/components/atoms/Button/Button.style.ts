import styled from 'styled-components';
import {
  border,
  color,
  ColorProps,
  BorderProps,
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

type ButtonProps = LayoutProps &
  ColorProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps &
  TypographyProps & {
    variant: string | undefined;
  };
// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.button<ButtonProps>`
  border-radius: ${({ variant }) => (variant === 'round' ? '50px' : '6px')};
  border: none;
  font-size: 16px;
  height: 48px;
  padding: 15px 25px;
  ${compose(border, color, flexbox, fontSize, layout, position, space, typography)};
`;
