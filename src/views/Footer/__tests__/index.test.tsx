import React from 'react';
import { render, within } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Footer from '..';

function RenderFooter(overridingProps = {}) {
  const defaultProps = {};
  // eslint-disable-next-line react/jsx-props-no-spreading
  return render(<Footer {...defaultProps} {...overridingProps} />);
}

describe('Footer', () => {
  it('should render three appropriates Puyo keyboards instructions', () => {
    // Given
    RenderFooter();

    const iconsList = [
      ['down', 'Chute Puyo'],
      ['right', 'Déplacement à droite'],
      ['left', 'Déplacement à gauche'],
    ];

    // Then
    iconsList.forEach(([iconTitle, iconLabel]) => {
      const divElement = screen.getByTitle(iconTitle).closest('div');
      const divChildren = within(divElement);

      expect(divChildren.getByText(iconLabel)).toBeInTheDocument();
    });
  });

  it('should render two rotation and one replay instructions', () => {
    // Given
    RenderFooter();

    // Then
    expect(screen.getByText(/rotation aiguille/i)).toBeInTheDocument();
    expect(screen.getByText(/rotation inverse/i)).toBeInTheDocument();
    expect(screen.getByText(/rejouer/i)).toBeInTheDocument();
  });
});
