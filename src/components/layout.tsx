import React, { FC } from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './header';
import Footer from './footer';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';

const Wrapper = styled.div`
  margin: ${props => props.theme.spacing.lg} auto;
  width: 100%;
  max-width: 900px;
  padding: 0 ${props => props.theme.spacing.nm};
  text-align: left;
`;

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
