function solution(s) {
  let result = "";
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? (obj[s[i]] += 1) : (obj[s[i]] = 1);
  }

  for (const str in obj) {
    if (obj[str] === 1) result += str;
  }

  return result.split("").sort().join("");
}
