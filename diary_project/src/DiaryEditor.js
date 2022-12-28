import styled from "styled-components";
import React, { useState, useRef, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const Editor = styled.div`
  border: 0.1rem solid gray;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const UserInput = styled.div`
  font-size: 1.4rem;
  border: 0.1rem solid gray;
  width: 50rem;
  height: ${(props) => props.height};
  padding: 1rem;
  margin-bottom: 2rem;
  resize: none;
  &:focus {
    outline: 0.1rem solid black;
  }
`;

const Span = styled.span`
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const Select = styled.select`
  width: 30rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  width: 50rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: var(--main-color);
  color: #fefef2;
  font-weight: 600;
  cursor: pointer;
`;

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      alert("이름을 입력해 주세요.");
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      alert("내용은 최소 5글자 이상 적어주세요.");
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    }); // 초기화
  };

  return (
    <Editor>
      <Title>오늘의 일기</Title>
      <div>
        <UserInput
          as="input"
          ref={authorInput}
          name="author"
          value={state.author}
          placeholder="작성자"
          type="text"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <UserInput
          as="textarea"
          ref={contentInput}
          height="15rem"
          name="content"
          value={state.content}
          placeholder="일기 내용"
          type="text"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <Span>오늘의 감정 점수 : </Span>
        <Select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1 😡</option>
          <option value={2}>2 😭</option>
          <option value={3}>3 😐</option>
          <option value={4}>4 🙂</option>
          <option value={5}>5 😁</option>
        </Select>
      </div>
      <div>
        <Button onClick={handleSubmit}>저장</Button>
      </div>
    </Editor>
  );
};

export default React.memo(DiaryEditor);
