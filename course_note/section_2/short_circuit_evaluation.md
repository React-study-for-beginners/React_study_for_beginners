## 3-3. 단락 회로 평가

### 논리 연산자 활용 (&&, ||, !)

```jsx
true && console.log(true); // true
!true || console.log(false); // false
```

```jsx
const getName = (person) => {
  const name = person && `반갑습니다. ${person}님!`;
  return name || "이름을 입력해 주세요.";
};

let person = "하이"; // 반값습니다. 하이님!
let person; // 이름을 입력해 주세요.

const name = getName(person);
console.log(name);
```
