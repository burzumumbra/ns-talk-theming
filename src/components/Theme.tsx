// src/components/Theme.tsx
import React, { ReactNode } from "react";
import {
  createBox,
  createText,
  createTheme,
  ThemeProvider as ReThemeProvider,
  useTheme as useReTheme,
} from "@shopify/restyle";


export const palette = {
  purple: '#5A31F4',
  orange: '#D96C06',
  yellow: '#FFC107',
  green: '#0ECD9D',
  teal: '#2292A4',
  white: '#FFF',
  gray: '#F5EFED',
  black: '#0F0A0A',
  darkGray: '#333',
  lightGray: '#EEE',
  darkBlue: '#1f3137',
  cocacola: '#FE001A',
  pepsiRed: '#C9002B',
  pepsiBlue: '#004B93',
};

const theme = createTheme({
  colors: {
    canPrimary: palette.cocacola,
    canSecondary: palette.white,
    primary: palette.purple,
    secondary: palette.green,
    tertiary: palette.orange,
    mainForeground: palette.black,
    mainBackground: palette.white,
    secondaryBackground: palette.gray,
    primaryCardBackground: palette.purple,
    secondaryCardBackground: palette.white,
    primaryCardText: palette.white,
    secondaryCardText: palette.black,
    cardBackground: palette.gray,
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  textVariants: {
    title: {
      fontSize: 24,
      lineHeight: 28,
      color: "primary",
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 24,
      color: "secondary",
    },
    body: {
      fontSize: 18,
      lineHeight: 20,
      color: "mainForeground",
    },
    cardVariants: {
      primary: {
        backgroundColor: 'primaryCardBackground',
        shadowOpacity: 0.3,
      },
      secondary: {
        backgroundColor: 'secondaryCardBackground',
        shadowOpacity: 0.1,
      },
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

const darkThemeExtended: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    
    canPrimary: palette.pepsiBlue,
    canSecondary: palette.pepsiRed,

    primary: palette.black,
    secondary: palette.yellow,
    mainBackground: palette.darkBlue,
    mainForeground: palette.white,
    secondaryCardBackground: palette.purple,
    secondaryCardText: palette.white,
    cardBackground: palette.teal,
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ReThemeProvider theme={theme}>{children}</ReThemeProvider>;
};

export type Theme = typeof theme;
export default theme;
export const darkTheme = darkThemeExtended;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

Text.defaultProps = {
  variant: "body",
};
