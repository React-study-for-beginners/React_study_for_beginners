export const getStringDate = (date) => {
  // toISOString : ISO 형식의 문자열 반환, YYYY-MM-DD(인덱스로 9까지 짜르면 형식 반환 가능)
  return date.toISOString().slice(0, 10);
};