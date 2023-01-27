export const intToLocaleString = (value: number, defaultValue = '') => {
  return isNaN(value) ? defaultValue : value.toLocaleString('ko-KR');
};
