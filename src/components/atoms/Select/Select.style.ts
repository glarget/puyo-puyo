import styled from 'styled-components';
import {
  border,
  BorderProps,
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

type SelectProps = LayoutProps & FlexboxProps & BorderProps & PositionProps & SpaceProps;

// eslint-disable-next-line import/prefer-default-export
export const SelectWrapper = styled.select<SelectProps>`
  background: none;
  border-radius: 6px;
  font-size: 16px;
  height: 48px;
  padding: 5px;
  ${compose(border, flexbox, fontSize, layout, position, space)};
  option {
    color: ${({ theme }): string => theme.colors.darkGrey};
  }
`;
