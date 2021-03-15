import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Header from '../../views/Header';
import Footer from '../../views/Footer';
import theme from '../../theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
  font-family: 'Days One';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/days-one-v10-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/days-one-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/days-one-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/days-one-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/days-one-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/days-one-v10-latin-regular.svg#DaysOne') format('svg'); /* Legacy iOS */
}

  body {
    background: linear-gradient(to right, rgb(86, 180, 211), rgb(52, 143, 80));
    font-family: 'Days One';
    font-size: 16px;
    line-height: 1.4;
  }
`;

interface Props {
  children: ReactElement;
}

/**
 * returns the main skeleton of the Puyo game.
 * It contains a header, a footer and a React Portal
 */
export default function MainLayout({ children }: Props): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
      <Div id="portal-modal" />
    </ThemeProvider>
  );
}
