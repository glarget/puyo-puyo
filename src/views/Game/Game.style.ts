import styled, { keyframes } from 'styled-components';

import Div from '../../components/atoms/Div';

const scaleAnimation = keyframes`
  0% {
    opacity: 1;
    width: scale(1);
  }
  100% {
    opacity: 0.6;
    transform: scale(0.97);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const AnimatedImage = styled(Div)`
  animation: ${scaleAnimation} 0.8s infinite alternate-reverse;
`;
