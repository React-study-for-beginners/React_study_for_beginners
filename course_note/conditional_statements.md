## 2-5. 조건문

### if / if else

```jsx
let a = 3;

if (a >= 7) {
  console.log("7 이상입니다.");
} else if (a >= 5) {
  console.log("5 이상입니다.");
} else {
  console.log("5 미만입니다.");
}
// 5 미만 입니다.
```

### switch

```jsx
let country = "ko";

switch (country) {
  case "ko":
    console.log("한국");
    break; // 한국
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  default:
    console.log("미분류");
    break;
}
```

브레이크 해주지 않을 경우
모든 조건들이 콘솔에 찍히게 된다.
따라서 `switch 문`을 사용할 때는 적절할 때 break 해줘야 함.
