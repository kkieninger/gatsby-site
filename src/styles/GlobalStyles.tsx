import React, { FC } from 'react';
/** @jsx jsx */
import { Global, css, jsx, useTheme } from '@emotion/react'

/**
 * In here we're predominately just setting some sane defaults and implementing
 * some global-level styles. So far it's mostly typography, but more to follow
 */
export const GlobalStyles: FC = () => {
  const theme = useTheme();

  return (
    <Global styles={css`
      :root {
        --fontFamily-primary: ${theme.fonts.familyPrimary};
        --color-orange: ${theme.colors.orange};
        --color-darkgray: ${theme.colors.darkGray};
        --color-cream: ${theme.colors.cream};
        --lineHeight-normal: ${theme.fonts.lineHeight.normal};
        --fontSize-root: ${theme.fonts.size.root};
      }

      *,
      :after,
      :before {
        box-sizing: border-box;
      }

      html {
        line-height: var(--lineHeight-normal);
        font-size: var(--fontSize-root);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        background-color: var(--color-cream);
        font-family: var(--fontFamily-primary);
        font-weight: ${theme.fonts.weight.medium};
        color: var(--color-darkgray);
        position: relative;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: ${theme.fonts.weight.bold};
        margin-top: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.nm};
        line-height: ${theme.fonts.lineHeight.tight};
        letter-spacing: -0.025rem;
      }

      h1 > a,
      h2 > a,
      h3 > a,
      h4 > a,
      h5 > a,
      h6 > a {
        color: inherit;
        text-decoration: none;
      }

      h1 {
        font-size: ${theme.fonts.size.scale6};
      }

      h2 {
        font-size: ${theme.fonts.size.scale5};
      }

      h3 {
        font-size: ${theme.fonts.size.scale4};
      }

      h4 {
        font-size: ${theme.fonts.size.scale3};
      }

      h5 {
        font-size: ${theme.fonts.size.scale2};
      }

      h6 {
        font-size: ${theme.fonts.size.scale1};
      }

      p {
        line-height: ${theme.fonts.lineHeight.loose};
        margin: 0 0 ${theme.spacing.nm};
        padding: 0;
      }
    `}/>
  );
};
