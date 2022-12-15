## 3-8. Promise

### 콜백 지옥에서 벗어나기!

비동기 작업이 가질 수 있는 3가지 상태
![image](https://user-images.githubusercontent.com/108778921/206114026-54895bb2-8f33-4c1b-8b90-33521ac610dd.png)

`Pending`에서 `해결(resolve)`되면 `Fulfilled(성공)`<br>
`Pending`에서 `거부(reject)`되면 `Rejected(실패)`

```jsx
function isPositive(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형이 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask; // Promise 반환
}

const response = isPositive("");

response
  .then((res) => {
    console.log("성공 : ", res);
  })
  .catch((error) => {
    console.log("실패 : ", error);
  });

// const response = isPositive("");
// 101
// 성공 : 양수

// const response = isPositive("");
// 실패 :  주어진 값이 숫자형이 아닙니다.
```

```jsx
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = a + b;
      resolve(sum);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const subtract = a - 1;
      resolve(subtract);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multiply = a * 2;
      resolve(multiply);
    }, 2000);
  });
}

// then 체이닝
taskA(1, 4)
  .then((sum) => {
    console.log(`Task A Result: ${sum}`);
    return taskB(sum);
  })
  .then((subtract) => {
    console.log(`Task B Result: ${subtract}`);
    return taskC(subtract);
  })
  .then((multiply) => {
    console.log(`Task C Result: ${multiply}`);
  });

console.log("결과는?");
// 결과는?
// Task A Result: 5
// Task B Result: 4
// Task C Result: 8
```

아래와 같이 중간에 끊어서 다른 코드 넣는 것도 가능

```jsx
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = a + b;
      resolve(sum);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const subtract = a - 1;
      resolve(subtract);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multiply = a * 2;
      resolve(multiply);
    }, 2000);
  });
}

const start = taskA(1, 4).then((sum) => {
  console.log(`Task A Result: ${sum}`);
  return taskB(sum);
});

console.log("과연");

start
  .then((subtract) => {
    console.log(`Task B Result: ${subtract}`);
    return taskC(subtract);
  })
  .then((multiply) => {
    console.log(`Task C Result: ${multiply}`);
  });

console.log("결과는?");
// 과연
// 결과는?
// Task A Result: 5
// Task B Result: 4
// Task C Result: 8
```
