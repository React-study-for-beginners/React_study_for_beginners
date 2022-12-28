//처음에 푼 방법
function solution(array) {
  const result = array
    .map((e) => {
      const strNum = String(e);
      return strNum.length > 1 ? strNum.split("") : strNum;
    })
    .reduce((acc, curr) => [...acc, ...curr], [])
    .reduce((acc, curr) => (acc += curr === "7" ? 1 : 0), 0);

  return result;
}

//filter 사용
function solution(array) {
  const result = array
    .map((e) => {
      const strNum = String(e);
      return strNum.length > 1 ? strNum.split("") : strNum;
    })
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter((e) => e === "7").length;

  return result;
}

//join 사용
function solution(array) {
  const result = array
    .join("")
    .split("")
    .filter((e) => e === "7").length;

  return result;
}
