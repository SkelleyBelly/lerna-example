// eslint-disable-next-line import/prefer-default-export
export const numberWithCommas = (x: number): string =>
  Math.round(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
