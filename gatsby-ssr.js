import React from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';

/**
 * This wrapRootElement is also needed to bundle static assets
 * and prevent the build from failing:
 * 
 * https://github.com/gatsbyjs/gatsby/issues/11494
 */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)