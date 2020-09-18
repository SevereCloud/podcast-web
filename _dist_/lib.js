export const timeFormat = timestamp => {
  return [Math.floor(timestamp / 60).toString().padStart(2, '0'), Math.floor(timestamp % 60).toString().padStart(2, '0')].join(':');
};
//# sourceMappingURL=lib.js.map
