import React, { FC } from 'react';
/** @jsx jsx */
import { Global, css, jsx, useTheme } from '@emotion/react'

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
        font-weight: 500;
        color: var(--color-darkgray);
        position: relative;
      }
    `}/>
  );
};
