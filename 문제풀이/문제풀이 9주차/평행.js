function solution(dots) {
  const inclination = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const current = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (inclination.includes(current)) return 1;
      inclination.push(current);
    }
  }
  return 0;
}
