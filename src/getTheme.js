import { LIGHT, DARK } from './themes/';
import THEMES from "./constants/themes";

export const getTheme = themeName => {
  switch (themeName) {
    case THEMES.LIGHT: return LIGHT;
    case THEMES.DARK: return DARK;
    default: return DARK
  }

};
