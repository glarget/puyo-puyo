import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import Starter from '..';

const themeColors = { colors: { darkGrey: '' } };

function renderStarter(overridingProps = {}, theme = themeColors) {
  const defaultProps = {
    onButtonClick: () => {},
    onInputChange: () => {},
    onSelectChange: () => {},
    onSelectLevelChange: () => {},
  };

  return render(
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Starter {...defaultProps} {...overridingProps} />
    </ThemeProvider>,
  );
}

describe('Starter', () => {
  it('should render an input text', () => {
    // Given
    renderStarter();

    // Then
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render two selectors', () => {
    // Given
    renderStarter();

    // Then
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
  });

  it('should render a play button', () => {
    // Given
    renderStarter();

    // Then
    expect(screen.getByRole('button', { name: /let's go/i })).toBeInTheDocument();
  });

  describe('user interactions', () => {
    it('should dispatch the onInputChange prop when we type something on the input', () => {
      // Given
      const onInputChangeMock = jest.fn();
      renderStarter({ onInputChange: onInputChangeMock });

      // When
      userEvent.type(screen.getByRole('textbox'), 'w');
      userEvent.type(screen.getByRole('textbox'), 'i');

      // Then
      expect(onInputChangeMock).toHaveBeenCalledTimes(2);
    });

    it('should dispatch the onSelectChange prop when we select one option', () => {
      // Given
      const onSelectChangeMock = jest.fn();
      renderStarter({ onSelectChange: onSelectChangeMock });

      // When
      userEvent.selectOptions(screen.getAllByRole('combobox')[0], 'foxy');

      // Then
      expect(onSelectChangeMock).toHaveBeenCalled();
    });

    it('should dispatch the onSelectLevelChange prop when we select one option', () => {
      // Given
      const onSelectLevelChangeMock = jest.fn();
      renderStarter({ onSelectLevelChange: onSelectLevelChangeMock });

      // When
      userEvent.selectOptions(screen.getAllByRole('combobox')[1], '2');

      // Then
      expect(onSelectLevelChangeMock).toHaveBeenCalled();
    });

    it('should dispatch the onButtonClick prop when we click on the play button', () => {
      // Given
      const onButtonClickMock = jest.fn();
      renderStarter({ onButtonClick: onButtonClickMock });

      // When
      userEvent.click(screen.getByRole('button', { name: /let's go/i }));

      // Then
      expect(onButtonClickMock).toHaveBeenCalled();
    });
  });
});
