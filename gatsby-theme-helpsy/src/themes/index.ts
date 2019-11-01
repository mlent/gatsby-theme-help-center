import { Theme } from "@material-ui/core";
import { EMOTION_THEME, IEMotionTheme } from "./emotionTheme";
import MUI_THEME from "./muiTheme";

export type CombinedTheme = Theme & IEMotionTheme;

export const COMBINED_THEME: CombinedTheme = {
  ...MUI_THEME,
  ...EMOTION_THEME
};

export { EMOTION_THEME, MUI_THEME };
