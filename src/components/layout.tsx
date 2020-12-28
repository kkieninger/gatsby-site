import React, { FC } from 'react';
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled';
import Header from './header';
import Footer from './footer';

/**
 * Globals to consider:
 * - normalize / reset
 * - colors
 * - layout: margin / padding
 * - fonts
 */

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 900px;
  padding: 0 1rem;
  text-align: left;
`;

const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Global styles={css`
        *,
        :after,
        :before {
          box-sizing: border-box;
        }

        body {
          background-color: #fdf9f5;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          color: #313332;
          position: relative;
        }
      `}/>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
