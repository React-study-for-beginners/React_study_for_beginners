## 2-3. 자료형과 형 변환

### Primitive Type(원시 타입)과 Non-Primitive Type (비 원시 타입)

![image](https://user-images.githubusercontent.com/108778921/204193359-c6e71eb9-930b-427a-b038-e8b8bc6a859e.png)

☝ 강의에서는 위와 같이 나눴지만,

| 기본 자료형 | 참조 자료형         |
| ----------- | ------------------- |
| String      | Object              |
| Number      | Array               |
| Boolean     | Function            |
| Null        | RegExp(정규 표현식) |
| undefined   |                     |

☝ 이렇게 나누는 경우도 있었다.

<br>

**Primitive Type(원시 타입)** <br>

```jsx
let number = 12;
```

한 번에 하나의 값만 가질 수 있음<br>
하나의 고정된 저장 공간 이용

**Non-Primitive Type (비 원시 타입)** <br>

```jsx
let array = [1, 2, 3, 4];
```

한 번에 여러 개의 값을 가질 수 있음<br>
여러 개의 고정되지 않은 동적 공간 사용

<br>

### Primitive Type(원시 타입)

1. 숫자형

```jsx
let age = 25;
let height = 170.5;
let inf = Infinity;
let minusInf = -Infinity;
let nan = NaN;

console.log(age + tall); // 195.5 → 사칙연산이 적용됨!
```

2. 문자형

```jsx
let name = "hi";
let name2 = `hello ${name}`; // hello hi
```

3. Boolean

```jsx
let isTrue = true;
let isFalse = false;
```

4. null과 undefined

```jsx
let a; // undefined
let b = null; // null
```

- undefined : 선언되었으나 정의되지 않았음
- null : 의도적으로 아무 것도 없음을 나타냄

<br>

### 묵시적 형 변환

```jsx
let numA = 12;
let numB = "2";

console.log(numA * numB); // 24
```

`numA`는 숫자형이고 `numB`는 문자형이지만,
자바스크립트가 적절하게 형 변환을 하여 값을 추출함

```jsx
let numA = 12;
let numB = "2";

console.log(numA + numB); // 122
```

하지만 덧셈의 경우 '14'가 나오지 않고
'122'가 나오게 된다.

<br>

### 명시적 형 변환

```jsx
let numA = 12;
let numB = "2";

console.log(numA + Number(numB)); // 14
```

만약 '12+2'의 값인 '14'가 나오게 하려면
`numB`를 의도적으로 형 변환해줘야 한다.<br>
`parseInt`, `Number`을 이용해 문자형을 숫자형으로 바꿀 수 있다.
