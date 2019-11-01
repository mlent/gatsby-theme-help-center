import { PaletteColor } from '@material-ui/core/styles/createPalette';

export interface IEMotionTheme {
  custom: {
    colors: {
      primary: PaletteColor;
      success: PaletteColor;
      pending: PaletteColor;
      error: PaletteColor;
      secondary: PaletteColor;
    };
    fontSize: {
      s: number;
      m: number;
      l: number;
    };
    borderRadius: {
      unit: number;
    };
  };
}

export const EMOTION_THEME: IEMotionTheme = {
  custom: {
    borderRadius: {
      unit: 3
    },
    colors: {
      primary: {
        light: '#63ccff',
        main: '#4285f4',
        dark: '#006db3',
        contrastText: 'white'
      },
      secondary: {
        light: '#ff8cb3',
        dark: '#c51162',
        main: '#f50057',
        contrastText: 'white'
      },
      success: {
        light: '#ADE488',
        dark: '#237804',
        main: '#52c41a',
        contrastText: 'white'
      },
      pending: {
        light: '#F5E18C',
        dark: '#F6CC1B',
        main: '#F6CC1B',
        contrastText: 'white'
      },
      error: {
        light: '#F7CACA',
        dark: '#DB4D4D',
        main: '#DB4D4D',
        contrastText: 'white'
      }
    },
    fontSize: {
      s: 12,
      m: 14,
      l: 18
    }
  }
};
