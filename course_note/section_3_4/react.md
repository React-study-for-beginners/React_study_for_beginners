## 5-1. Why React?

### React

: Node 기반의 JavaScript UI 라이브러리

### 리액트의 필요성

1. (컴포넌트화 방식으로) 중복 코드를 줄여 Shotgun Surgery 문제를 피할 수 있다. 재사용성을 높일 수 있다. => 유지보수가 편하다!
2. 명령형 프로그래밍(절차를 하나하나 다 나열) 대신 선언형 프로그래밍(목적을 바로 말함)을 할 수 있다.
3. Virtaul DOM(Document Object Model, 문서 객체 모델: 브라우저가 실제로 사용하는 객체) 사용해 재렌더딩을 줄일 수 있다.

<br>

## 5-3. JSX

### 조건

1. 모든 태그를 닫아줘야 한다. `<h2></h2> <image />`
2. 하나의 부모를 가져야 한다.

- 만약 하나의 태그로 감싸기 싫다면 `React Fragment`를 사용해주면 된다.

```jsx
import React from "react"; // React Fragment를 사용하려면 꼭 불러와야 함!

function App() {
  return (
    <React.Fragment>
      <h2>하이</h2>
    </React.Fragment>
  );
}

// React Fragment도 귀찮다면 빈 태그를 사용해도 된다.

function App() {
  return (
    <>
      <h2>하이</h2>
    </>
  );
}
```

<br>

## 5-4. State

### State(상태)란?

: 계속 값이 바뀔 수 있는 동적인 데이터

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const [count2, setCount2] = useState(0);

  const increase2 = () => {
    setCount2(count2 + 1);
  };

  const decrease2 = () => {
    setCount2(count2 - 1);
  };
  // 여러 state를 하나의 컴포넌트가 가지고 있어도 문제가 생기지 않음, 따로 동작!

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={increase2}>+</button>
      <button onClick={decrease2}>-</button>
    </>
  );
};
```

<br>

## 5-5. Props

### 컴포넌트에 데이터를 전달하는 방법

```jsx
// App.js
import Counter from "./Counter";

function App() {
  const number = 5;

  return (
    <div>
      <Counter a={1} initialValue={5} />
    </div>
  );
}

export default App;
```

```jsx
// Counter.js
import React, { useState } from "react";

const Counter = (props) => {
  console.log(props); // {a:1, initialValue: 5} 객체로 전달됨

  const [count, setCount] = useState(props.initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};

export default Counter;
```

```jsx
// App.js
import Counter from "./Counter";

function App() {
  const number = 5;

  const allProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    initialValue: 5,
  };

  return (
    <div>
      <Counter {...allProps} />
    </div>
  );
}

export default App;
```

```jsx
// Counter.js
import React, { useState } from "react";

// 구조 분해 할당 ({ initialValue })
const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // 5

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};

Counter.defaultProps = {
  // 디폴트 값 설정
  initialValue: 0,
};

export default Counter;
```

### 동적인 props

```jsx
// Counter.js
import React, { useState } from "react";
import OddOrEven from "./OddOrEven";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <OddOrEven count={count} />
    </>
  );
};

export default Counter;
```

```jsx
// OddOrEven.js

const OddOrEven = ({ count }) => {
  console.log(count);

  return <div>{count % 2 === 0 ? "짝수" : "홀수"}</div>;
  // count에 따라 변경된다.
};

export default OddOrEven;
```

## 컴포넌트 props

```jsx
// App.js

import Container from "./OddOrEven";
import Counter from "./Counter";

function App() {
  return (
    <Container>
      <Counter />
    </Container>;
  );
}

export default App;
```

```jsx
// Container.js

const Container = ({ children }) => {
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid black" }}>
      {children}
    </div>
  );
};

export default Container;
```
