## 2-10. 배열

**Non-Primitive Type (비 원시 타입)** <br>
한 번에 여러 개의 값을 가질 수 있음

```jsx
let a = new Array(); // 생성자 방식
let b = []; // 객체 리터럴 방식
```

```jsx
let arr = [1, "2", true, null, {}, function () {}];
```

객체와 마찬가지로 배열 안에도 모든 자료형을 넣을 수 있다.

<br>

### 배열 접근

```jsx
let arr = [1, 2, 3, 4, 5];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
```

배열은 인덱스를 이용해 접근할 수 있다.

<br>

### 배열 추가

```jsx
let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.push({ key: "value" });
console.log(arr); // [1, 2, 3, 4, 5, 6, Object]
```

어떤 자료형이든 넣을 수 있다. `push`를 사용할 경우 **배열의 맨 뒤**에 넣어짐!

<br>

<details>
<summary><strong>✨배열 메서드 참고✨</strong></summary>

![image](https://user-images.githubusercontent.com/108778921/204239263-13b9dbf0-0783-4ce5-a33f-5ba9d79f72ca.png)

</details>

<br>

### 배열 길이 알아내기

```jsx
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
```
