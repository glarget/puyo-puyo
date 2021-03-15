import styled from 'styled-components';
import type { ComponentProps } from 'react';

import Div from '../../components/atoms/Div';

type RulesModalWrapperProps = ComponentProps<typeof Div> & {
  onClick: () => void;
};

export const RulesModalOverlay = styled(Div)<RulesModalWrapperProps>`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const RulesModalWrapper = styled(Div)``;

export default RulesModalWrapper;
