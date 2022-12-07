## 2-8. 콜백 함수

다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말한다.<br>
콜백을 넘겨받는 코드는 콜백을 필요에 따라 즉시 실행할 수도 있고, 나중에 실행할 수도 있다.

```jsx
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때
    goodCallback();
  } else {
    // 기분 안 좋을 때
    badCallback();
  }
}

function cry() {
  console.log("😭");
}

function sing() {
  console.log("😄🎙♪");
}

checkMood("good", sing, cry);
```
