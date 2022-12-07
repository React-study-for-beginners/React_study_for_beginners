## 3-7. 동기 & 비동기

### 순서대로 실행하는 것과 그렇지 않은 것들

![image](https://user-images.githubusercontent.com/108778921/206095938-8038eb44-139c-40c8-a603-876fba9e0fb5.png)

자바스크립트는 코드가 작성된 순서대로 작업을 처리함.<br>
이전 작업이 진행중일 때는 다음 작업을 수행하지 않고 기다림.<br>
먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행.<br>
→ 동기 방식의 처리<br>

<br>

![image](https://user-images.githubusercontent.com/108778921/206096279-5ed19fe8-e8a3-44cf-bef4-021ef82d26e2.png)

동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 시,
모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스탑되기 때문에 전반적인 흐름이 느려진다.<br>
→ 동기 방식의 처리의 문제점<br>

<br>

![image](https://user-images.githubusercontent.com/108778921/206096478-ba63958f-672b-4a73-a52d-5cc3c09f9071.png)

코드를 실행하는 일꾼 Thread를 여러 개 사용하는 방식인
**Multi-Thread** 방식으로 작동시키면 위와 같은 방식으로 작업 분할이 가능함.<br>
오래 걸리는 일이 있어도 다른 일꾼 Thread에게 지시하면 되므로 괜찮음.

> **하지만 자바스크립트는 Single-Thread로 동작** ❗

즉 Multi-Thread 방식으로 사용 불가능.

<br>
<br>

### 논 블로킹과 비동기

Single-Thread 방식을 이용하면서, 동기적 작업의 단점을 극복하기 위해 여러 개의 작업을 동시에 실행시킴.<br>
즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함.<br>

![image](https://user-images.githubusercontent.com/108778921/206104059-d71ff5b6-30bc-44c3-abd2-59dbda5d055e.png)

![image](https://user-images.githubusercontent.com/108778921/206105105-7592dc0d-d698-4d64-96a5-1bfa9430aef3.png)

```jsx
function taskA() {
  console.log("시작");
}

taskA();
console.log("종료");
// 시작
// 종료
```

→ 동기 방식의 처리

```jsx
function taskA(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

function taskB(a, b, callback) {
  setTimeout(() => {
    const subtract = a - b;
    callback(subtract);
  }, 1000);
}

function taskC(a, b, callback) {
  setTimeout(() => {
    const multiply = a * b;
    callback(multiply);
  }, 4000);
}

taskA(1, 4, (sum) => {
  console.log(`Task A Result: ${sum}`);
});

taskB(4, 3, (subtract) => {
  console.log(`Task B Result: ${subtract}`);
});

taskC(5, 2, (multiply) => {
  console.log(`Task C Result: ${multiply}`);
});

console.log("결과는?");
// 결과는?
// (1초 후) Task B Result: 1
// (3초 후) Task A Result: 5
// (4초 후) Task C Result: 10
```

→ 비동기 작업

<br>

### JS 엔진의 동기적 코드 처리 방법

![image](https://user-images.githubusercontent.com/108778921/206108105-454fa94f-c6e6-4a24-a788-b3278e3bec57.png)

Main Context가 Call Stack에 들어오는 순간 : 자바스크립트 실행

Main Context가 Call Stack에서 나가는 순간 : 자바스크립트 종료

![image](https://user-images.githubusercontent.com/108778921/206108532-3d26087e-a23f-4439-94a6-f02595f8753b.png)

Call Stack 쌓이는 순서 : `Main Context` → `three()` → `two()` → `one()`<br>

Call Stack 없어지는 순서 : `one()` → `two()` → `three()` → `Main Context`<br>

<br>

#### JS 엔진의 비동기적 코드 처리 방법

![image](https://user-images.githubusercontent.com/108778921/206109678-02d8b861-a2a6-474a-9ec8-2386796c21d6.png)

비동기 `setTimeout()`은 Web APIs에 저장된다.

![image](https://user-images.githubusercontent.com/108778921/206109828-39fa89d5-b67a-47f0-a685-7a67f8f3554f.png)

Call Stack에 있는 `asyncAdd()`가 실행되어 Call Stack에서 없어지고
`setTimeout`에서 설정한 시간(3초)이 지나면
Web APIs에 있는 `setTimeout()`은 사라지고 `cb()` 콜백 함수는 Callback Queue로 옮겨지게 된다.

![image](https://user-images.githubusercontent.com/108778921/206110503-83cd5165-21b7-4f5a-a804-5d2b3cb3ea11.png)

그리고 `cb()` 콜백 함수는 Event Loop에 의해서 Call Stack으로 다시 옮겨지게 된다.
`cb()` 콜백 함수까지 모두 실행되고 나면 `Main Context`도 Call Stack에서 사라져 자바스크립트는 완전히 종료된다.

#### 콜백 지옥

```jsx
function taskA(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

function taskB(a, b, callback) {
  setTimeout(() => {
    const subtract = a - b;
    callback(subtract);
  }, 1000);
}

function taskC(a, b, callback) {
  setTimeout(() => {
    const multiply = a * b;
    callback(multiply);
  }, 4000);
}

taskA(1, 4, (sum) => {
  console.log(`Task A Result: ${sum}`);
  taskB(sum, 3, (subtract) => {
    console.log(`Task B Result: ${subtract}`);
    taskC(subtract, 2, (multiply) => {
      console.log(`Task C Result: ${multiply}`);
    });
  });
});

console.log("결과는?");
// 결과는?
// Task A Result: 5
// Task B Result: 2
// Task C Result: 4
```

![image](https://user-images.githubusercontent.com/108778921/206111861-e6c903fd-0c43-44f7-a8fc-8fc5350db889.png)

콜백 함수를 콜백 함수 안에 넣어서
**비동기 처리의 결과를 또 다른 비동기 처리의 값으로** 넣을 수 있다.<br>
하지만 코드가 길어지면 위와 같이 콜백 지옥(Callback Hell)에 빠질 수 있다!<br>
<br>

이 때, **Promise**를 이용하면 콜백 지옥에서 벗어날 수 있다.
