## 3-6. Spread 연산자

### 배열, 객체의 요소를 효율적으로 재사용할 수 있다.

```jsx
const cookie = {
  madeIn: "Korea",
};

const chocochipCookie = {
  ...cookie,
  topping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  topping: "blueberry",
};

const stawberryCookie = {
  ...cookie,
  topping: "stawberry",
};

console.log(chocochipCookie); // {madeIn: "Korea", topping: "chocochip"}
console.log(blueberryCookie); // {madeIn: "Korea", topping: "blueberry"}
console.log(stawberryCookie); // {madeIn: "Korea", topping: "stawberry"}
```

concat() 대신 spread 연산자를 사용할 수 있다.

```jsx
const koreanFood = ["떡볶이", "비빔밥"];
const chineseFood = ["짜장면", "짬뽕", "탕수육", "멘보샤", "팔보채"];

const food = [...koreanFood, ...chineseFood];
console.log(food);
// ["떡볶이", "비빔밥", "짜장면", "짬뽕", "탕수육", "멘보샤", "팔보채"]
```

<br>
<br>

+MDN Web Docs - Spread Syntax (...)

```jsx
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
```

```jsx
const array = [1, 2, 3];
const obj = { ...array };

console.log(obj); // { 0: 1, 1: 2, 2: 3}
```

```jsx
function numbers(a, b, c, d, e) {
  console.log(a, b, c, d, e); // -1 0 1 2 4
}

const start = [0, 1];

numbers(-1, ...start, 2, ...[4]);
```
