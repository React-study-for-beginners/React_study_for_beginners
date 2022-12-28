function solution(order) {
  return order
    .toString()
    .split("")
    .filter((e) => e === "3" || e === "6" || e === "9").length;
}
