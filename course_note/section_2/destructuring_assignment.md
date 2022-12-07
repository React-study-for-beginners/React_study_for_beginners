## 3-5. 비구조화 할당

### 배열과 객체를 효과적으로 사용하는 방법

#### 배열

```jsx
let [one, two, three] = [1, 2, 3];

console.log(one, two, three); // 1 2 3
```

- 기본값 설정

```jsx
let [one, two, three, four] = [1, 2, 3];

console.log(one, two, three, four); // 1 2 3 undefined

let [one, two, three, four = 4] = [1, 2, 3];

console.log(one, two, three, four); // 1 2 3 4
```

- Swap

```jsx
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b); // 20 10
```

#### 객체

```jsx
let obj = { one: 1, two: 2, three: 3, name: "하이" };

let { name, one, two, three } = obj;
console.log(one, name, two, three); // 1 "하이" 2 3
```

순서가 바뀌어도 상관 없다.
why? 객체는 key값을 기준으로 하기 때문

```jsx
let obj = { one: 1, two: 2, three: 3, name: "하이" };

let { name: myName, one, two, three, four = "four" } = obj;
console.log(myName, one, two, three, four); // 하이 1 2 3 four
```

변수명을 바꿔줄 수도 있고, 배열처럼 기본값을 설정해줄 수도 있다.
