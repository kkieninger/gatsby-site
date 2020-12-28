import React from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';

// this wraps the entire app in our Emotion Theme
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)