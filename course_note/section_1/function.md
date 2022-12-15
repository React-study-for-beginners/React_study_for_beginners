## 2-6. 함수

```jsx
function getArea(width, height) {
  let area = width * height;
  console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성

// 함수 호출
getArea(10, 20); // 200
console.log("함수 실행 완료");
```

<br>

```jsx
function getArea(width, height) {
  let area = width * height;
  return area; // 값을 반환
}

let area1 = getArea(10, 20);
console.log("area1 : ", area1); // area1 : 200
console.log("함수 실행 완료");
```

<br>

```jsx
let global = 100; // 전역 변수

// 매개 변수 : width, height
function getArea(width, height) {
  let area = width * height; // 지역 변수 (해당 함수 안에서만 사용 가능)
  return area;
}

let area1 = getArea(10, 20);
console.log(area); // error : area is not defined
console.log(global); // 100
```
