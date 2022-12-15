## 2-11. 반복문

### for 문

```jsx
for (초기식; 조건식; 연산식) {
  // 반복 수행할 명령
}
```

```jsx
for (let i = 1; i <= 100; i++) {
  console.log("hi"); // hi가 100번 출력됨
}
```

#### 배열 순환

```jsx
const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  // a
  // b
  // c
}
```

#### 객체 순환

- key와 value 모두 추출

```jsx
const person = {
  name: "홍길동",
  age: 25,
  gender: "여성",
};

const personKeys = Object.keys(person);
for (let i = 0; i < personKeys.length; i++) {
  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
  // name : 홍길동
  // age : 25
  // gender : 여성
}
```

- value만 추출

```jsx
const person = {
  name: "홍길동",
  age: 25,
  gender: "여성",
};

const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
  // 홍길동
  // 25
  // 여성
}
```

<br>

### 기타 반복문

`for 문` 외에도

1. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement">do...while 문</a>
2. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement">while 문</a>
3. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement">for...in 문</a>
4. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for...of 문</a>

등이 있다.
