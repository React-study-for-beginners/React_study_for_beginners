## 3-10. API 호출하기

### API

**API란?**<br>
Application Programming Interface, 응용 프로그램 프로그래밍 인터페이스<br>
<br>
응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스.<br>
주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공.

<br>

웹 사이트를 통해 정보를 가져오는 방식과 비슷

![image](https://user-images.githubusercontent.com/108778921/206124285-40e2ef77-b951-4bdb-9ca3-c1fa7c07c1d4.png)

![image](https://user-images.githubusercontent.com/108778921/206124809-3af44acc-fb9d-4d59-a3b7-83baa915db89.png)

API 호출 = 다른 프로그램(웹 사이트)에게 데이터를 받기 위해 말을 건다. = 웨이터에게 주문

> ❗ 하지만 언제 데이터를 받을지 예상할 수 없다!

<br>
API 호출에 더미 데이터를 응답해주는 무료 사이트 : 
<a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder - Free Fake REST API</a>
<br>

위 홈페이지에 들어가 스크롤을 내리면 **Resources**가 있는데,
여기서 사용할 수 있는 자원을 확인할 수 있다.

<br>
<br>

### fetch

API를 호출할 수 있게 도와주는 내장 함수<br>

```jsx
let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  console.log(res)
);
// Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 200, ok: true…}
// → 편지를 받았을 때 편지 봉투라고 생각하면 된다. 우체통에서 편지 봉투를 꺼냈으니 이제 편지를 꺼내면 됨!
```

```jsx
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
// (100) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]
```
