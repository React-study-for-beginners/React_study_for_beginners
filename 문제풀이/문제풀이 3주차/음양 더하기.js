//예전에 푼 방법
function solution(absolutes, signs) {
  let n = 0;
  absolutes.forEach((e, i) => {
    if (signs[i] === true) {
      n += e;
    } else {
      n += e * -1;
    }
  });

  return n;
}

//이번에 푼 방법
function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, i) => acc + curr * (signs[i] ? +1 : -1),
    0
  );
}
