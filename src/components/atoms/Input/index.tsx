import React from 'react';
import { BorderProps, SpaceProps } from 'styled-system';

import type { ReactElement } from 'react';

import { InputWrapper } from './Input.style';

type InputProps = BorderProps &
  SpaceProps & {
    id?: string;
    onChange: () => void;
    placeholder: string;
  };

/**
 * Renders a generic Input component with styled-system props
 */
export default function Input({ id, onChange, placeholder, ...rest }: InputProps): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <InputWrapper id={id} onChange={onChange} placeholder={placeholder} {...rest} />
  );
}
