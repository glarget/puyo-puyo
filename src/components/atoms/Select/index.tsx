import React from 'react';
import type { ReactElement } from 'react';

import { SelectWrapper } from './Select.style';

interface SelectProps {
  [key: string]: any;
}

/**
 * Renders a generic Select component with styled-system props
 */
export default function Select({ ...rest }: SelectProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SelectWrapper {...rest} />;
}
