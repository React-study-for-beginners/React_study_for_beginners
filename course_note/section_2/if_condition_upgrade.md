## 3-4. 조건문 업그레이드

```jsx
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기"); // true
const food2 = isKoreanFood("파스타"); // false
console.log(food1);
console.log(food2);
```

```jsx
const recommendation = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "파스타",
};
const recommend = (food) => {
  return recommendation[food] || "굶기";
};

console.log(recommend("중식")); // 멘보샤
```
