import React from 'react';
import type { RefObject, ReactElement } from 'react';
import type { BorderProps, LayoutProps, FlexboxProps, SpaceProps } from 'styled-system';

import { CanvasWrapper } from './Canvas.style';

type CanvasProps = BorderProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps & {
    height: string;
    width: string;
  } & {
    ref: RefObject<HTMLElement>;
  };

export default function Canvas({ width, height, ref, ...props }: CanvasProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CanvasWrapper ref={ref} width={width} height={height} {...props} />;
}
