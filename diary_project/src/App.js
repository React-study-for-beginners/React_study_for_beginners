import DiaryEditor from "./DiaryEditor";
import "./css/reset.css";
import "./css/App.css";
import DiaryList from "./DiaryList";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import styled from "styled-components";

const DiaryAnalysis = styled.div`
  font-size: 1.8rem;
  margin: 1.8rem 0 1.4rem 1.4rem;
  line-height: 1.4;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
            }
          : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = createContext(null);
export const DiaryDispatchContext = createContext(null);

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: "EDIT",
      targetId,
      newContent,
    });
  }, []);

  const memoizedDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = ((goodCount / data.length) * 100).toFixed(1);
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = memoizedDiaryAnalysis;

  const store = {
    data,
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  return (
    <DiaryStateContext.Provider value={store}>
      <DiaryDispatchContext.Provider value={memoizedDispatch}>
        <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <DiaryAnalysis>
            <p>전체 일기 : {data.length}</p>
            <p>기분 좋은 일기 개수 : {goodCount}</p>
            <p>기분 나쁜 일기 개수 : {badCount}</p>
            <p>기분 좋은 일기 비율 : {goodRatio}%</p>
          </DiaryAnalysis>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
