const vertical = (val: number) => Math.floor((val / 812) * window.innerHeight);
const horizontal = (val: number) => Math.floor((val / 375) * window.innerWidth);

export const responsive = {
  vertical,
  horizontal,
};
