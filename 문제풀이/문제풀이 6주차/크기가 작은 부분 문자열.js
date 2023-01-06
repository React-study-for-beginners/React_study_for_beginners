function solution(t, p) {
  let count = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const num = t.slice(i, i + p.length);
    if (+num <= +p) {
      count++;
    }
  }

  return count;
}

function solution(t, p) {
  const arr = t.split("");
  return arr
    .map((_, i) => arr.slice(i, i + p.length))
    .filter((e) => e.length === p.length)
    .filter((e, i) => +e.join("") <= +p).length;
}
