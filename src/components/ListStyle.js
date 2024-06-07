import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../icons/DeleteIcon.svg";

const ListStyle = ({ headers, data, renderRow, onDelete }) => {
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
        <ListItem key={index}>
          {renderRow(item)}
          <DeleteButton onClick={() => onDelete(index)}>
            <StyledDeleteIcon />
          </DeleteButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  border-top: solid 0.2rem black;
  margin-top: 1rem;
  box-sizing: border-box;
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
  box-sizing: border-box;

  .institution,
  .startDate,
  .endDate {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .period {
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .startDate,
  .endDate {
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .work {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .institution,
  .work,
  .period,
  .startDate,
  .endDate {
    display: flex;
    justify-content: center;
    width: 30%; /* 각 열의 너비를 줄임 */
  }

  .number,
  .id,
  .name {
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 4.2rem;
  border-bottom: solid 0.1rem #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: black;
  box-sizing: border-box;

  .institution,
  .startDate,
  .endDate {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .institution,
  .work,
  .period,
  .startDate,
  .endDate {
    display: flex;
    justify-content: center;
    width: 50%; /* 각 열의 너비를 줄임 */
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
  fill: #6e6e6e;
`;

export default ListStyle;
