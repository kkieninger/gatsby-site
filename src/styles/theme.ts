import { Theme } from '@emotion/react';

/**
 * Used to provide base style options to Emotion's ThemeProvider in Layout. It's the
 * functional equivalent of setting CSS variables in a project and using them throughout
 * 
 * TODO: reassess what is used / required
 */

const baseSpaceUnit = '1em';

export const theme: Theme = {
  fonts: {
    familyPrimary: '"Poppins", "Arial", sans-serif',
    lineHeight: {
      none: 1,
      tight: 1.1,
      normal: 1.5,
      loose: 1.65,
    },
    size: {
      root: '16px',
      scale0: '0.833rem',
      scale1: '1rem',
      scale2: '1.2rem',
      scale3: '1.44rem',
      scale4: '1.728rem',
      scale5: '2.074rem',
      scale6: '2.488rem',
      scale7: '2.986rem',
    },
    weight: {
      extraLight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
      black: 700,
    },
  },
  colors: {
    orange: '#cc5500',
    darkGray: '#313332',
    cream: '#fdf9f5',
  },
  spacing: {
    none: 0,
    xxs: `calc(0.25 * ${baseSpaceUnit})`,
    xs: `calc(0.5 * ${baseSpaceUnit})`,
    sm: `calc(0.75 * ${baseSpaceUnit})`,
    nm: baseSpaceUnit,
    md: `calc(1.25 * ${baseSpaceUnit})`,
    lg: `calc(2 * ${baseSpaceUnit})`,
    xl: `calc(3.25 * ${baseSpaceUnit})`,
    xxl: `calc(5.25 * ${baseSpaceUnit})`,
  },
}