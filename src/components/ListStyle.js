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
        <ItemWrapper key={index}>
          <ListItem>{renderRow(item)}</ListItem>
          <DeleteButton onClick={() => onDelete(index)}>
            <StyledDeleteIcon />
          </DeleteButton>
        </ItemWrapper>
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
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  border-bottom: solid 0.1rem black;
  box-sizing: border-box;
  justify-content: space-between;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .id,
  .name {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    margin: 1rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  border-bottom: solid 0.1rem #6e6e6e;
`;

const ListItem = styled.div`
  flex: 1;
  height: 4.2rem;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: black;
  box-sizing: border-box;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .id,
  .name {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: -1rem;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
`;

export default ListStyle;
