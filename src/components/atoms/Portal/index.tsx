import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode, ReactPortal } from 'react';

interface Props {
  children: ReactNode;
}

/**
 * Returns a generic React Portal component
 */
export default function Portal({ children }: Props): ReactPortal {
  const portal = document.getElementById('portal-modal');
  const hostElement = document.createElement('div');

  useEffect(() => {
    portal?.appendChild(hostElement);

    return () => portal?.removeChild(hostElement);
  }, [hostElement, portal]);

  return createPortal(children, hostElement);
}
