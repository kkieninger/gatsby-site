import '@emotion/react';

/**
 * Hardcoding these type definitions to make introspection easier throughout this project. The
 * obvious downside is that any change to this project's theme also requires a change to its interface.
 * If preferred, it would be feasible to add generic type definitions, though some type safety is lost.
 
 * Examples:
 * Record<string, any> { }
 * { [key: string]: any }
 */
declare module '@emotion/react' {
  export interface Theme {
    fonts: ThemeFonts;
    colors: ThemeColors;
    spacing: ThemeSpacing;
  }
}

interface ThemeFonts {
  familyPrimary: string;
  lineHeight: ThemeLineHeight;
  size: ThemeFontSize;
  weight: ThemeFontWeight;
}

interface ThemeLineHeight {
  none: number | string;
  tight: number | string;
  normal: number | string;
  loose: number | string;
}

// Major Third Type Scale
interface ThemeFontSize {
  root: string | number;
  scale0: string | number;
  scale1: string | number;
  scale2: string | number;
  scale3: string | number;
  scale4: string | number;
  scale5: string | number;
  scale6: string | number;
  scale7: string | number;
}

interface ThemeFontWeight {
  extraLight: number;
  light: number;
  normal: number;
  medium: number;
  bold: number;
  black: number;
}

interface ThemeColors {
  orange: string;
  darkGray: string;
  cream: string;
}

interface ThemeSpacing {
  none: string | number;
  xxs: string | number;
  xs: string | number;
  sm: string | number;
  nm: string | number;
  md: string | number;
  lg: string | number;
  xl: string | number;
  xxl: string | number;
}
