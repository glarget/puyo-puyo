import React from 'react';
import type { ReactElement, ReactSVGElement, SVGProps } from 'react';
import type { FlexboxProps, SpaceProps } from 'styled-system';

/** FIXME: remove the @ts-ignore */
// @ts-ignore
import { ArrowDown } from './assets/arrowDown.svg';
// @ts-ignore
import { ArrowLeft } from './assets/arrowLeft.svg';
// @ts-ignore
import { ArrowRight } from './assets/arrowRight.svg';
// @ts-ignore
import { Info } from './assets/info.svg';

type Props = SpaceProps &
  SVGProps<ReactSVGElement> &
  FlexboxProps & {
    id: string;
  };

/**
 * Renders a generic React SVG component based a string id
 */
export default function Icon({ id, ...rest }: Props): ReactElement | null {
  switch (id) {
    case 'arrowLeft':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowLeft role="img" title="left" {...rest} />;
    case 'info':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Info role="img" title="info" {...rest} />;
    case 'arrowRight':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowRight role="img" title="right" {...rest} />;
    case 'arrowDown':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowDown role="img" title="down" {...rest} />;
    default: {
      return null;
    }
  }
}
