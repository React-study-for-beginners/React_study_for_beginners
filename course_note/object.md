## 2-9. 객체

**Non-Primitive Type (비 원시 타입)** <br>
한 번에 여러 개의 값을 가질 수 있음

```jsx
let a = new Object(); // 생성자 방식
let b = {}; // 객체 리터럴 방식
```

더 간결하고 많은 사람들이 사용하기에 '객체 리터럴 방식'을 사용하는 게 좋다.

```jsx
let obj = {
  key: "value", // 프로퍼티 (object property)
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {},
};

console.log(obj.key1); // 123
console.log(obj.key2); // true
console.log(obj["key3"]); // undefined
```

```jsx
let person = {
  name: "홍길동",
  age: 25,
};

console.log(getPropertyValue("name")); // 홍길동

function getPropertyValue(key) {
  return person[key];
}
```

```jsx
let person = {
  name: "홍길동",
  age: 25,
};

const getPropertyValue = (key) => person[key];

console.log(getPropertyValue("name")); // 홍길동
```

<br>

### 프로퍼티 추가

```jsx
let person = {
  name: "홍길동",
  age: 25,
};

person.location = "한국";
person["gender"] = "여성";
```

<br>

### 프로퍼티 수정

```jsx
const person = {
  name: "홍길동",
  age: 25,
};

person.age = 26;
person["age"] = 27;
```

상수 자체를 수정하는 행위가 아닌
상수가 갖는 object를 수정하는 것이기 때문에
const(상수)로 선언해도 괜찮다.

그렇다면 상수를 수정하는 행위는 무엇일까?

```jsx
const person = {
  name: "홍길동",
  age: 25,
};

person = {
  age: 20,
}; // error : person is read-only
```

<br>

### 프로퍼티 삭제

```jsx
const person = {
  name: "홍길동",
  age: 25,
};

delete person.age; // 메모리에 남아있음

person.name = null; // 메모리에서도 삭제됨

console.log(person); // {name: null}
```

따라서 `person.name = null;` 방식을 지향할 것!

<br>

### 프로퍼티 함수 사용

```jsx
const person = {
  name: "홍길동", // 멤버
  age: 25, // 멤버
  say: function () {
    console.log(`안녕 나는 ${this.name}!`);
  }, // 메서드(= 방법)
};

person.say(); // 안녕 나는 홍길동!
```

```jsx
const person = {
  name: "홍길동",
  say: function () {
    console.log(`안녕 나는 ${person.name}!`);
  },
};

person.say(); // 안녕 나는 홍길동!
```

<br>

### 객체 안에 해당 키를 가진 프로퍼티가 있는지 확인

```jsx
const person = {
  name: "홍길동",
  say: function () {
    console.log(`안녕 나는 ${this.name}!`);
  },
};

console.log(`name : ${"name" in person}`); // true
console.log(`age : ${"age" in person}`); // false
```
