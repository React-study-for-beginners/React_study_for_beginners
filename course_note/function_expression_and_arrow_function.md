## 2-7. 함수 표현식 & 화살표 함수

### 함수 표현식

```jsx
let hello = function () {
  return "안녕하세요";
}; // 함수 표현식

function helloFunc() {
  return "안녕하세요";
} // 함수 선언식

const helloText = hello();
console.log(helloText); // 안녕하세요.
```

### 함수 표현식과 함수 선언식의 차이점?

```jsx
console.log(helloB); // 안녕하세요.
// 함수 선언식 : 호이스팅되어 정상적으로 호출됨
console.log(helloA); // error : helloA is not a function
// 함수 표현식 : 선언 전에는 호출할 수 없음

let helloA = function () {
  return "안녕하세요";
}; // 함수 표현식

function helloB() {
  return "안녕하세요";
} // 함수 선언식

console.log(helloA); // 안녕하세요.
```

### 화살표 함수

```jsx
let hello = () => {
  return "안녕하세요";
};
```

함수 표현식을 더 간결하게 사용할 수 있음

```jsx
let hello = () => "안녕하세요";
```

위의 예시처럼 `return "안녕하세요"` 하나만 반환하는 경우 `() => "안녕하세요"` 이렇게 더 간결하게 사용할 수 있음.

📌 화살표 함수도 호이스팅의 대상이 아니다.
