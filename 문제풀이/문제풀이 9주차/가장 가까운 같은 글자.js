function solution(s) {
  const result = [-1];
  for (let i = 1; i < s.length; i++) {
    const sliceS = s.slice(0, i);
    if (sliceS.includes(s[i])) {
      result.push(i - sliceS.lastIndexOf(s[i]));
    } else {
      result.push(-1);
    }
  }

  return result;
}
