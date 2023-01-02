function solution(spell, dic) {
  const result = dic.filter((e) =>
    spell.every((item) => e.includes(item))
  ).length;

  return result !== 0 ? 1 : 2;
}
