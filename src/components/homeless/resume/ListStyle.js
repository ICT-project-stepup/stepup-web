import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../../icons/DeleteIcon.svg";

const ListStyle = ({ headers, data, renderRow, onDelete, isEditing }) => {
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
          <ListDeleteBtnWrapper>
            <ListItem>{renderRow(item)}</ListItem>
            {isEditing && (
              <DeleteButtonWrapper>
                <DeleteButton onClick={() => onDelete(index)}>
                  <StyledDeleteIcon />
                </DeleteButton>
              </DeleteButtonWrapper>
            )}
          </ListDeleteBtnWrapper>
        </ItemWrapper>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  border-top: solid 0.125rem #2b2b2b;
  margin-top: 1.6875rem;
  box-sizing: border-box;
`;

const ListHeader = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  border-bottom: solid 0.0625rem #2b2b2b;
  box-sizing: border-box;
  justify-content: space-between;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .parterUserId,
  .partnerName {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 1rem;
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  border-bottom: solid 0.0625rem #6e6e6e;
`;

const ListDeleteBtnWrapper = styled.div`
  width: calc(100% + 3rem);
  display: flex;
`;

const ListItem = styled.div`
  width: calc(100% - 3rem);
  height: 4.2rem;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Medium";
  font-size: 1.5rem;
  color: #2b2b2b;
  box-sizing: border-box;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .parterUserId,
  .partnerName {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem;
  }
`;

const DeleteButtonWrapper = styled.div`
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
`;

export default ListStyle;
