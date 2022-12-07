## 3-2. 삼항 연산자

### 조건문 한 줄로 끝내기

```jsx
let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}
```

👇 삼항 연산자로 변환!

```jsx
let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");
```

### Truthy, Falsy 이용할 수 있다.

```jsx
let a; // undefined
const result = a ? true : false;
console.log(result); // false;
```

❗ 코드의 길이는 줄일 수 있지만,
코드의 가독성을 해칠 수 있기 때문에 적절하게 잘 사용할 것!
