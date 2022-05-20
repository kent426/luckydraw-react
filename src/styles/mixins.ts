export const MAX_WIDTH = 500;
export const MAX_HEIGHT = 750;
const vertical = (val: number) =>
  Math.floor((val / 812) * Math.min(window.innerHeight, MAX_HEIGHT));
const horizontal = (val: number) =>
  Math.floor((val / 375) * Math.min(window.innerWidth, MAX_WIDTH));

export const responsive = {
  vertical,
  horizontal,
};
