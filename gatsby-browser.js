// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
// import './src/style.css';

// Highlighting for code blocks
import 'prismjs/themes/prism.css';

import React from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';

/**
 * This wraps the entire app in our Emotion ThemeProvider so it can be accessed
 * throughout different pages, markdown files, components, etc.
 */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)