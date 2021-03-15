import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import Header from '..';

function RenderHeader() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return render(<Header />);
}

describe('Header', () => {
  it('should render a main logo', () => {
    // Given
    RenderHeader();

    // Then
    expect(screen.getByRole('heading', { name: 'PUYO PUYO' })).toBeInTheDocument();
  });

  it('should render a rules button', () => {
    // Given
    RenderHeader();

    // Then
    expect(screen.getByRole('button', { name: /règles du jeu/i })).toBeInTheDocument();
  });

  it('should render a audio tag', () => {
    // Given
    RenderHeader();

    // Then
    expect(screen.getByText('audio')).toBeInTheDocument();
  });

  it('should dispatch the handleClickRules prop when we click on the rules button', async () => {
    // Given
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal-modal');
    document.body.appendChild(portalRoot);

    RenderHeader();

    // When
    userEvent.click(screen.getByRole('button', { name: /règles du jeu/i }));

    // Then
    expect(screen.getByText('Ce jeu de puzzle', { exact: false })).toBeInTheDocument();
  });
});
