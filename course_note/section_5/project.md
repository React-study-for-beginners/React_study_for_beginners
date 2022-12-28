## 간단한 일기장 프로젝트

### React.js 기본

1. 사용자 입력 및 배열 리스트 처리하기
2. React Lifecycle과 API
3. React App 프로처럼 성능 최적화하기 with 도구 사용
4. React 컴포넌트 트리에 전역 데이터 공급하기

<br>

#### useEffect

- 컴포넌트에 어떤 변화가 일어났을때 (State값이 변경되거나, Mount 되거나, Update 되거나 등)
  특정 함수를 실행시켜주는 Hook

<br>

#### React Lifecycle

- Mount → Update → UnMount
- 원하는 단계에 원하는 기능을 넣을 수 있다.

```jsx
import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Sub Component Mount");
    return () => {
      console.log("Sub Component Unmount"); // 화면에서 사라짐
    };
  }, []);
  return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log("Mount!"); // 화면에서 나타남
  }, []);

  useEffect(() => {
    console.log("Update!"); // 업데이트 (리렌더링)
  });

  useEffect(() => {
    console.log(`count is update : ${count}`);
  }, [count]); // count가 변할 때마다 업데이트

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]); // text가 변할 때마다 업데이트

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={toggle}>ON/OFF BUTTON</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
```

<br>

#### useMemo

- memorization. 값을 기억하고, 같은 값을 다시 계산하고 싶지 않을 때 사용
- 특정 값이 변할 때만 리렌더링할 수 있도록 설정할 수 있다.

<br>

#### React.memo

- 컴포넌트가 불필요한 상황(Props가 변화하지 않는 상황)에 리렌더링 되지 않도록 만들어
  리액트 앱의 전반적인 성능 최적화를 이끌어 내기 위해 사용하는 고차함수

```jsx
import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  // count가 변할 때만 리렌러딩
  useEffect(() => {
    console.log(`CountA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  // 객체({ obj })는 얕은 비교를 함(객체 주소에 의한 비교) => count가 변하지 않아도 변했다고 인식
  useEffect(() => {
    console.log(`CountB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count; // obj가 변할 때만 리렌러딩
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: 1 })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```
