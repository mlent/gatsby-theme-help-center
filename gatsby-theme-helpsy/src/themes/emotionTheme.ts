import { PaletteColor } from '@material-ui/core/styles/createPalette';
import { COLORS } from './colors';

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
      unit: 3,
    },
    colors: COLORS,
    fontSize: {
      s: 12,
      m: 14,
      l: 18,
    },
  },
};
