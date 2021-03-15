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

type Props = SpaceProps &
  SVGProps<ReactSVGElement> &
  FlexboxProps & {
    id: string;
  };

/**
 * Renders a generic React SVG component based a string id
 */
export default function Icon({ id, ...rest }: Props): ReactElement {
  switch (id) {
    case 'arrowLeft':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowLeft {...rest} />;
    case 'arrowRight':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowRight {...rest} />;
    case 'arrowDown':
    default: {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArrowDown {...rest} />;
    }
  }
}
