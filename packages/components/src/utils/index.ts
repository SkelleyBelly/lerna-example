export const numberWithCommas = (x: number) => Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
