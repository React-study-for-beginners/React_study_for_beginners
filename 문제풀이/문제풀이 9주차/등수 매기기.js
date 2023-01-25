function solution(score) {
  const avgscore = score.map((e) => (e[0] + e[1]) / 2);
  const sortscore = [...avgscore].sort((a, b) => b - a);
  return avgscore.map((e) => sortscore.indexOf(e) + 1);
}
