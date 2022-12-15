## 3-9. async & await - 직관적인 비동기 처리 코드 작성하기

### async

```jsx
function hello() {
  return "hello";
}
async function helloAsync() {
  return "hello Async";
}

console.log(hello()); // Hello
console.log(helloAsync()); // Promise {<pending>}
```

```jsx
async function helloAsync() {
  return "Hello Async";
}

helloAsync().then((response) => {
  console.log(response); // Hello Async
});
```

<br>

### await

```jsx
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function helloAsync() {
  await delay(3000);
  return "Hello Async";
}

async function main() {
  const response = await helloAsync();
  console.log(response); // (3초 후) Hello Async
}

main();
```
