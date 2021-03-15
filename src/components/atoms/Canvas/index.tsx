import React from 'react';
import type { RefObject, ReactElement } from 'react';
import type { BorderProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

import { CanvasWrapper } from './Canvas.style';

type CanvasProps = BorderProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps & {
    height: string;
    width: string;
  } & {
    ref: RefObject<HTMLCanvasElement>;
  };

/**
 * Returns a custom canvas with styled-system properties
 */
export default function Canvas({ width, height, ref, ...props }: CanvasProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CanvasWrapper ref={ref} width={width} height={height} {...props} />;
}
