import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import type { ReactElement } from 'react';

import Header from '../../views/Header';
import Footer from '../../views/Footer';
import theme from '../../theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
     /* Montserrat Regular */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat'), 
    url(/fonts/montserrat-regular.woff2) format('woff2'),
    url(/fonts/montserrat-regular.woff) format('woff')
  }
  /* Montserrat SemiBold */
  @font-face {
      font-family: 'MontserratSemiBold';
      font-weight: 700;

      src: local('MontserratSemiBold'),
        url(/fonts/montserrat-semibold.woff2) format('woff2'),
        url(/fonts/montserrat-semibold.woff}) format('woff');
    }
  body {
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 1.4;
  }
`;

type Props = {
  children: ReactElement;
};

export default function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
