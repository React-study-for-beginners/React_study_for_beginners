import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "./App";

const List = styled.ul`
  background-color: #f5f3f8;
  margin: 2rem 0;
  padding: 2rem;
`;

const Info = styled.li`
  font-size: 1.6rem;
`;

const Clock = styled.li`
  border-bottom: 0.1rem solid #000;
  padding-bottom: 1.8rem;
  margin-bottom: 1rem;
  color: gray;
  font-size: 1.4rem;
`;

const Content = styled.li`
  font-weight: bold;
  margin: 3rem 0 2.4rem 0;
`;

const Button = styled.button`
  width: 8.2rem;
  padding: 1rem;
  margin-right: ${(props) => (props.left ? "1rem" : "0")};
  border-radius: 0.4rem;
  background-color: var(--main-color);
  color: #fefef2;
  font-weight: 600;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: calc(100% - 2rem);
  padding: 1rem;
  height: 6.25em;
  border: none;
  resize: none;
`;

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);

  const [isEditing, setisEditing] = useState(false);
  const toggleisEditing = () => setisEditing(!isEditing);

  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setisEditing(false);
    setLocalContent(content); // 일기 수정 내용 초기화
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      alert("내용은 최소 5글자 이상 적어주세요.");
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleisEditing();
    }
  };

  return (
    <List>
      <Info>
        작성자 : {author} &nbsp;|&nbsp; 감정 점수 : {emotion}
      </Info>
      <br />
      <Clock>작성 시간 : {new Date(created_date).toLocaleString()}</Clock>
      <Content>
        {isEditing ? (
          <Textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          ></Textarea>
        ) : (
          content
        )}
      </Content>
      {isEditing ? (
        <>
          <Button onClick={handleQuitEdit} left>
            취소
          </Button>
          <Button onClick={handleEdit}>완료</Button>
        </>
      ) : (
        <>
          <Button onClick={handleClickRemove} left>
            삭제
          </Button>
          <Button onClick={toggleisEditing}>수정</Button>
        </>
      )}
    </List>
  );
};

export default React.memo(DiaryItem);
