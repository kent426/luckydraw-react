import { responsive } from "./styles/mixins";

export const PINK_BORDER_WID = responsive.horizontal(12);

export const BALL_COLORS = ["#2479CF", "#F33B92", "#77C9CC", "#6D6D6D"];

const colorToPriceCat = {
  "#2479CF": "BLUE",
  "#F33B92": "RED",
  "#77C9CC": "GREEN",
  "#6D6D6D": "GREY",
} as any;
const priceCatToColor = Object.keys(colorToPriceCat).reduce((acc, key) => {
  acc[colorToPriceCat[key]] = key;
  return acc;
}, {});

type F = (color: string) => string;

export const priceCatToColorFun = (tag) => priceCatToColor[tag];

export const priceCatFUN: F = (color) => colorToPriceCat[color];

export const collisionCategory = {
  DEFAULT: 0x0001,
  CLAW: 0x0002,
  SELECT: 0x0008,
  BALL: 0x0004,
};

export const BALL_RADIUS = responsive.horizontal(14);
export const CLAWTOP_OFFSET = responsive.vertical(-180);
export const CLAWBOX_WID = responsive.horizontal(60);
export const CLAWBOX_HEI = responsive.vertical(300);
export const STICK_WID = 5;
export const STICK_HEIGHT = responsive.horizontal(40);

export const CLAW_VELOCITY_VERTICAL = 2;
