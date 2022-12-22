// node.js : 자바스크립트의 실행환경 (Javascript's Runtime)
// GUI (Graphic User Interface) / CLI (Command Line Interface)

const calc = require("./Week03_calc");  // require 경로로 모듈을 불러옴

console.log(calc.add(1, 2));
console.log(calc.sub(10, 4));

// 리액트는 Component 기반의 UI 라이브러리
// 선언형 프로그래밍
// Virtual DOM

// Webpack : 다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
// Babel : JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리
// Create React App 강의 => 리액트 파일이 각각 무슨 일을 하는지 알려줌 (참고)

// jsx 
// 모든 태그는 닫아줘야 함
// 하나의 부모를 가지고 있어야 함 => React Fragment 사용해도 됨

// State
// 상태 :  계속해서 변화하는 특정 상태, 상태에 따라 각각 다른 동작을 함 (동적 데이터)
const Counter = () => {
    const [count , setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    };
    const onDecrease = () => {
        setCount(count - 1);
    };

    return ( 
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

// Props
// 컴포넌트에 데이터를 전달하는 방법
function App() {
    const number = 4;
    
    const counterProps = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        initialValue: 5,
    }

    return (
      <div>
        <Counter {...counterProps} />
      </div>
    );
}

const CounterProp = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);   // 5
  
    const onIncrease = () => {
      setCount(count + 1);
    };
  
    const onDecrease = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    );

    // Counter.defaultProps = {    기본값 설정
    //     initialValue: 0,
    // }
};
