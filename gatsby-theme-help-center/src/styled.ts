import { css as original, Interpolation } from "emotion";
import styled, { CreateStyled } from "@emotion/styled";
import { COMBINED_THEME, CombinedTheme } from "./themes";

export const css = (styleFn: (theme: CombinedTheme) => Interpolation) => {
  return original(styleFn(COMBINED_THEME));
};

export default styled as CreateStyled<CombinedTheme>;
