## 4-1. Node.js란?

### 자바스크립트의 runtime (자바스크립트의 실행 환경)

자바스크립트 코드는 브라우저 내장 자바스크립트 엔진(브라우저마다 다름)을 이용하여 실행

node.js는 이런 자바스크립트를 어디서든 사용할 수 있게 도와줌

<br>

## 4-3. Node.js 기초

터미널 열기(ctrl+j) → CLI(Command Line Interface) = 명령어 입력

```
터미널 > node index.js
```

```jsx
//index.js

console.log("Hello Node.js");
// 터미널 : Hello Node.js
```

### 모듈 내보내기

```jsx
// calc.js
const add = (a, b) => a + b;

module.exports = {
  moduleName = "calc module",
  add: add,
}

// index.js
const calc = require("./calc");

console.log(calc.add(1, 2)); // 3
```

경로와 require 내장 함수를 이용해서(= Common JS 모듈 이용) 다른 js 파일을 사용할 수 있다.

❗ require, export 내장 함수는 node.js의 내장 함수 => 바닐라 자바스크립트에서는 사용이 제한된다.

<br>

## 4-4. Node.js 패키지 생성 및 외부 패키지 사용하기

npm(Node Package Manager) : Node.js 패키지 관리 도구

```
터미널 > npm init
package-example
enter
enter
...

Is this OK? yes
```

```json
// package.json
"scripts": {
  "test": "~",
  "start": "node index.js"
}
```

```
터미널 > npm start // index.js 실행
```

이렇게 간결한 명령어를 만들어서 편하게 이용할 수 있음

### 다른 사람의 패키기 사용하기

1. 구글에 npm.js 검색
2. www.npmjs.com 사이트 클릭 - 많은 패키지들을 무료로 사용할 수 있음
3. npmjs에서 randomcolor 검색
4. 상세 페이지에서 관련 정보 확인
5. install 목록에서 명령어 확인
6. 터미널 > 명령어 입력 (ex.npm i randomcolor)
7. package.json 파일에 패키지 추가됨
8. 사용법을 읽고 그대로 사용

```jsx
// 사용법 예시
const randomColor = require("randomcolor");

const color1 = randomColor();
const color2 = randomColor();
const color3 = randomColor();

console.log(color1, color2, color3);
```
