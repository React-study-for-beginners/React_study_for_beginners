## 2-4. 연산자

### 대입 연산자

```jsx
let a = 1;
```

<br>

### 산술 연산자

```jsx
let a = 1;
let b = 2;
let c = 3;

console.log(a + b); // 3 (덧셈)
console.log(a - b); // -1 (뺄셈)
console.log(a * b); // 2 (곱셈)
console.log(a / b); // 0.5 (나눗셈)
console.log(a % b); // 1 (나머지 구하기)
console.log(b ** c); // 8 (제곱)
```

<br>

### 연결 연산자

```jsx
let a = "1";
let b = "2";

console.log(a + b); // 12
```

<br>

### 복합 연산자

```jsx
let a = 5;

a += 10; // a = a + 10

console.log(a); // 15
```

```jsx
let a = 5;

a /= 10; // a = a / 10

console.log(a); // 0.5
```

<br>

### 증감 연산자

```jsx
let a = 10;

a++; // a = a + 1

console.log(a); // 11
```

```jsx
let a = 10;

console.log(a++); // 10
console.log(a); // 11
```

```jsx
let a = 10;

console.log(++a); // 11
```

**a++ : 후위 연산자** <br>
그 다음부터 값이 적용된다.<br>
**++a : 전위 연산자** <br>
바로 값이 적용된다.

<br>

### 논리 연산자

```jsx
console.log(!true); // false
```

! : not

```jsx
console.log(true && true); // true
console.log(true && false); // false
```

&& : and ( 둘 다 참일 경우만 true )

```jsx
console.log(true || true); // true
console.log(true || false); // true
```

|| : or ( 둘 중 하나가 참일 경우 true )

<br>

### 비교 연산자

```jsx
let compareA = 1 == "1"; // true
let compareB = 1 === "1"; // false

let compareC = 1 != "1"; // false
let compareD = 1 !== "1"; // true

let compareE = 1 < 2; // true
let compareF = 1 > 2; // false
let compareG = 2 >= 2; // true
```

<br>

### typeof 연산자

```jsx
let compareType = 1;

compareType = "1";
```

자바스크립트 '동적 타입 언어'이기 때문에
숫자로 할당했다가 문자로 할당해도 문제가 생기지 않는다.
유연하지만 문제가 생길 확률이 높다.

```jsx
let compareType = 1;

console.log(typeof compareType); // number

compareType = "1";

console.log(typeof compareType); // string
```

<br>

### null 병합 연산자

```jsx
let a;

a = a ?? 10;
console.log(a); // 10
```

?? : 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환한다.
