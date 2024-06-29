import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "./ListStyle";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";
import axios from "axios";

const ApplyWith = ({ isEditing, applyWithData, setApplyWithData }) => {
  const applyWithLabel = [
    { label: "번호", key: "number", className: "number" },
    { label: "아이디", key: "id", className: "id" },
    { label: "이름", key: "name", className: "name" },
  ];

  //const baseURL = 'http://localhost:8080'; // API 서버의 baseURL을 설정

  const handleInputChange = (index, key, value) => {
    const newApplyWithData = [...applyWithData];
    newApplyWithData[index][key] = value;
    setApplyWithData(newApplyWithData);
  };

  const handleDeleteRow = async (index) => {
    const applyWithId = applyWithData[index].applyWithId;
    try {
      await axios.delete(`/api/resume/applyWith/${applyWithId}`);
      const newApplyWithData = applyWithData.filter((_, i) => i !== index);
      setApplyWithData(newApplyWithData);
    } catch (error) {
      console.error("Failed to delete applyWith", error);
    }
  };

  const data = applyWithData.map((item, index) => ({
    number: index + 1, // 번호는 인덱스 + 1로 설정
    id: isEditing ? (
      <InputId
        placeholder="입력하세요."
        value={item.id}
        onChange={(e) => handleInputChange(index, "id", e.target.value)}
      />
    ) : (
      <Text>{item.id}</Text>
    ),
    name: isEditing ? (
      <InputName
        placeholder="입력하세요."
        value={item.name}
        onChange={(e) => handleInputChange(index, "name", e.target.value)}
      />
    ) : (
      <Text>{item.name}</Text>
    ),
  }));

  return (
    <Container>
      <Header>
        <Title>같이 지원하기</Title>
        <Description>
          같이 지원하고 싶은 사람이 있다면, 아이디와 이름을 적어서 같이
          지원해보아요.
        </Description>
      </Header>
      <ApplyWithBox>
        <ListStyle
          headers={applyWithLabel}
          data={data}
          renderRow={(item) => (
            <Row>
              <div className="number">{item.number}</div>
              <div className="id">{item.id}</div>
              <div className="name">{item.name}</div>
              <div className="delete">{item.delete}</div>
            </Row>
          )}
          onDelete={handleDeleteRow}
          isEditing={isEditing} // isEditing prop 추가
        />
        {isEditing && (
          <ButtonWrapper>
            <AddPersonButton
              onClick={() =>
                setApplyWithData([
                  ...applyWithData,
                  {
                    number: applyWithData.length + 1,
                    id: "",
                    name: "",
                  },
                ])
              }
            >
              <StyledAddIcon />
              인원 추가
            </AddPersonButton>
          </ButtonWrapper>
        )}
      </ApplyWithBox>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ApplyWithBox = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-family: "Pretendard-Medium";
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #6e6e6e;
`;

const Description = styled.div`
  width: 45.75rem;
  margin-left: 1rem;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: #6e6e6e;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
  }
`;

const InputId = styled.input`
  box-sizing: border-box;
  width: 100%; /* 너비를 100%로 설정하여 가변적으로 조정 */
  max-width: 13.75rem;
  height: 2.688rem;
  border: 0.1rem solid #8aa353;
  border-radius: 1rem;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #6e6e6e;
  padding: 0 1rem;

  &::placeholder {
    color: #8aa353;
    font-size: 1rem;
  }
`;

const InputName = styled.input`
  box-sizing: border-box;
  width: 100%; /* 너비를 100%로 설정하여 가변적으로 조정 */
  max-width: 13.75rem;
  height: 2.688rem;
  border: 0.1rem solid #8aa353;
  border-radius: 1rem;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #6e6e6e;
  padding: 0 1rem;

  &::placeholder {
    color: #8aa353;
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 0.1rem #6E6E6E;
`;

const AddPersonButton = styled.button`
  width: 189px;
  height: 43px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e6e6e;
  background-color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  border: 1.5px dashed #8aa353;
  border-radius: 15px;
`;

const StyledAddIcon = styled(AddIcon)`
  margin: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 20px;
  text-align: center;
  width: 100%;
  max-width: 220px;
  color: ${({ isEditing }) =>
    isEditing ? "#6e6e6e" : "#2B2B2B"}; // 읽기모드와 편집모드에 따라 다름
  background: ${({ isEditing }) => (isEditing ? "#f5f5f5" : "none")};
`;

export default ApplyWith;
