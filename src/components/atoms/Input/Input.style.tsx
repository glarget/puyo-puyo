import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
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
} from 'styled-system';

type InputProps = BorderProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SpaceProps;

// eslint-disable-next-line import/prefer-default-export
export const InputWrapper = styled.input.attrs({
  type: 'text',
})<InputProps>`
  border: 1px solid ${({ theme }): string => theme.colors.grey};
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ theme }): string => theme.colors.darkGrey};
  font-size: 18px;
  height: 40px;
  padding: 20px 25px;
  ${compose(border, color, flexbox, fontSize, layout, position, space)};
`;
