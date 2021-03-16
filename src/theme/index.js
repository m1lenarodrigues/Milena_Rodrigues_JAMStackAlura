import { typographyVariants } from './utils/typographyVariants';

export const colors = {
  fonts: {
    light: {
      color: '#f4aec9',
    },
  },
  background: {
    light: {
      color: '#fff',
    },
    main: {
      color: '#f6f6f6;',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  fontFamily: 'Amatic SC',
  typographyVariants,
  breakpoints,
};
