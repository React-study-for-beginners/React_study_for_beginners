## 2-12. 배열 내장 함수

### forEach

```jsx
const arr = [1, 2, 3, 4, 5];

arr.forEach((el) => console.log(el));
// 1
// 2
// 3
// 4
// 5

arr.forEach((el) => console.log(el * 2));
// 2
// 4
// 6
// 8
// 10
```

<br>

### map

```jsx
const arr = [1, 2, 3, 4];
const newArr = arr.map((el) => {
  return el * 2;
});

console.log(newArr); // [2, 4, 6, 8]
```

<br>

### includes

```jsx
const arr = [1, 2, 3, 4];

let number = "3";

console.log(arr.includes(number)); // false
```

<br>

### indexOf

```jsx
const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.indexOf(number)); // 2
```

<br>

### findIndex

```jsx
const arr = [
  { color: "red" },
  { color: "blue" },
  { color: "black" },
  { color: "blue" },
];

const idx = arr.findIndex((el) => el.color === "blue");

console.log(idx); // 1
```

조건을 만족하는 첫 번째 요소의 인덱스 번호를 반환

<br>

### find

```jsx
const arr = [
  { color: "red" },
  { color: "blue" },
  { color: "black" },
  { color: "blue" },
];

const elm = arr.find((el) => el.color === "blue");

console.log(elm); // {color: "blue"}
```

조건을 만족하는 첫 번째 요소를 반환

<br>

### filter

```jsx
const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "black" },
  { num: 4, color: "blue" },
];

console.log(arr.filter((el) => el.color === "blue"));
// [
//   { num: 2, color: "blue" },
//   { num: 4, color: "blue" },
// ];
```

<br>

### slice

```jsx
const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "black" },
  { num: 4, color: "blue" },
];

console.log(arr.slice(0, 2)); // 0부터 1까지 반환
// [
//   { num: 1, color: "red" },
//   { num: 2, color: "blue" },
// ];
```

<br>

### concat

```jsx
const arr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
];

const arr2 = [
  { num: 3, color: "black" },
  { num: 4, color: "blue" },
];

console.log(arr1.concat(arr2));
// [
//   { num: 1, color: "red" },
//   { num: 2, color: "blue" },
//   { num: 3, color: "black" },
//   { num: 4, color: "blue" },
// ];
```

<br>

### sort (문자형 기준으로 정렬)

```jsx
let chars = ["나", "다", "가"];

console.log(chars.sort()); // ["가", "나", "다"]
```

```jsx
let num = [1, 2, 3, 20, 30, 40];

console.log(num.sort()); // [1, 2, 20, 3, 30, 40]
```

```jsx
let num = [1, 2, 3, 20, 30, 40];

const compare = (a, b) => {
  if (a > b) {
    // 큰 값이 뒤로
    return 1;
  }
  if (a < b) {
    // 작은 값이 앞으로
    return -1;
  }
  // 같을 땐 그 자리 그대로
  return 0;
};

console.log(num.sort(compare)); // [1, 2, 3, 20, 30, 40]
console.log(num.sort((a, b) => a - b)); // 오름차순 정렬
console.log(num.sort((a, b) => b - a)); // 내림차순 정렬
```

<br>

### join

```jsx
const arr = ["안", "녕"];

console.log(arr.join()); // 안,녕
console.log(arr.join("")); // 안녕
console.log(arr.join("^^")); // 안^^녕
```
