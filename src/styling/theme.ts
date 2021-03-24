export type Color =
  | "meta"
  | "primary"
  | "primaryGradientCompletion"
  | "dividing"
  | "white"
  | "footerBackground"
  | "pageBackground"
  | "text"
  | "gray";
export type UI =
  | "contentWidth"
  | "menuContentWidth"
  | "menuHeight"
  | "menuContent"
  | "buttonHeight"
  | "minFooterHeight";
export type FontSize = "copy" | "small" | "normal" | "subHeadline" | "headline";
export type Spacing = "small" | "normal" | "base";
export type BorderRadius = "small" | "base";

export type Theme = {
  color: { [key in Color]: string };
  uiDimensions: { [key in UI]: number };
  spacing: { [key in Spacing]: number };
  fontSize: { [key in FontSize]: number };
  borderRadius: { [key in BorderRadius]: number };
};

export const theme: Theme = {
  color: {
    primary: "#2F80ED",
    primaryGradientCompletion: "#183CBD",
    footerBackground: "#182048",
    pageBackground: "#E5E5E5",
    meta: "#757DA8",
    text: "#182048",
    dividing: "#E5DEDE",
    white: "#FFF",
    gray: "#F5F5F5"
  },
  fontSize: {
    copy: 11,
    small: 12,
    normal: 14,
    subHeadline: 25,
    headline: 36,
  },
  uiDimensions: {
    contentWidth: 1100,
    menuContentWidth: 1280,
    menuHeight: 72,
    menuContent: 1280,
    buttonHeight: 40,
    minFooterHeight: 120,
  },
  spacing: {
    small: 9,
    normal: 20,
    base: 16,
  },
  borderRadius: {
    base: 10,
    small: 3,
  },
};
