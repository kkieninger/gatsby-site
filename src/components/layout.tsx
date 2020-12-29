import React, { FC } from 'react';
import styled from '@emotion/styled';
import Header from './header';
import Footer from './footer';

import { GlobalStyles } from '../styles/GlobalStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.nm};
  text-align: left;
`;

const Layout: FC = ({ children }) => {
  const links = [
    { path: '/', label: 'home' },
    { path: '/writing', label: 'writing' },
    { path: '/about', label: 'about' },
  ];

  return (
    <Wrapper>
      <GlobalStyles />
      <Header { ...{ links } } />
      <main css={{
        flexGrow: 1,
      }}>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
