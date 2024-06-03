import React from "react";
import styled from "styled-components";

const ListStyle = ({ headers, data, renderRow }) => {
  return (
    <ListWrapper>
      <ListHeader>
        {headers.map((header, index) => (
          <span key={index} className={header.className}>
            {header.label}
          </span>
        ))}
      </ListHeader>
      {data.map((item, index) => (
        <ListItem key={index}>{renderRow(item)}</ListItem>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  border-top: solid 0.2rem black;
  //border-bottom: solid 0.1rem black;
  margin-top: 1rem;
`;

const ListHeader = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  border-bottom: solid 0.1rem black;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .institution,
  .date,
  .state {
    width: 12rem;
  }

  .work {
    width: 20rem;
  }

  .period,
  .time {
    width: 15rem;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 4.2rem;
  border-bottom: solid 0.1rem black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .institution,
  .date {
    width: 12rem;
  }

  .state {
    width: 12rem;
    font-family: "Pretendard-SemiBold";
    color: ${({ postState }) => (postState === "모집 중" ? "#6698D2" : "#D66F6F")};
  }

  .work,
  .time {
    width: 15rem;
  }

  .period {
    width: 20rem;
    font-family: "Pretendard-SemiBold";
  }
`;

export default ListStyle;
