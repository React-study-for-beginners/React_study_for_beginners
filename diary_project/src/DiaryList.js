import styled from "styled-components";
import DiaryItem from "./DiaryItem";
import React, { useContext } from "react";
import { DiaryStateContext } from "./App";

const List = styled.h2`
  font-size: 2rem;
  padding: 2rem;
  border: 0.1rem solid gray;
  margin-top: 2rem;
`;

const ListTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 0.8rem 0 2.8rem 0;
`;

const ListLength = styled.p`
  font-size: 1.8rem;
  padding-bottom: 0.8rem;
`;

const DiaryList = () => {
  const { data } = useContext(DiaryStateContext);

  return (
    <List>
      <ListTitle>일기 리스트</ListTitle>
      <ListLength>{data.length}개의 일기가 있습니다.</ListLength>
      <div>
        {data.map((li) => (
          <DiaryItem key={`diaryItem_${li.id}`} {...li} />
        ))}
      </div>
    </List>
  );
};

export default DiaryList;
