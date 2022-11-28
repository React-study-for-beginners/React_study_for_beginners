## 2-2. 변수와 상수

### 변수 규칙

1. 기호를 넣을 수 없다.

```jsx
let ^age = 25; // error!
let age+ = 35; // error!
```

예외) `_`(underscore), `$`(dollar)는 사용할 수 있다.

```jsx
let ag_$e = 25; // 25
```

<br>

2. 숫자가 아닌 문자로 시작해야 한다.

```jsx
let 6age = 25 // error!
```

<br>

3. 자바스크립트 예약어는 변수명으로 사용할 수 없다.

```jsx
let if = 25 // error!
```

<br>

### var과 let의 차이?

- var : 재선언 가능
- let : 재선언 불가능

```jsx
var a = b;
var a = c; ⭕
a = d; ⭕
// 재선언, 재할당 가능

let a = b;
let a = c; ❌️ // 재선언 불가능

let a = b;
a = c; ⭕ // 재할당 가능
```

실수를 막을 수 있는 let을 사용할 것!

<br>

### const와 let의 차이?

- let : 재선언 불가능, 재할당 가능
- const(상수) : 재선언 불가능, 재할당 불가능

```jsx
const age; // error!
```

기본적으로 const를 사용하고, 변수 값을 바꿀 일이 있다면 let를 사용할 것!
