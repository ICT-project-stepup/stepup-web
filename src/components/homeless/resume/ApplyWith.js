import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "../../ListStyle";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";

const ApplyWith = () => {
  const [applyWithData, setApplyWithData] = useState([
    {
      number: 1,
      id: "",
      name: "",
    },
  ]);

  const applyWithLabel = [
    { label: "번호", key: "number", className: "number" },
    { label: "아이디", key: "id", className: "id" },
    { label: "이름", key: "name", className: "name" },
  ];

  const handleInputChange = (index, key, value) => {
    const newApplyWithData = [...applyWithData];
    newApplyWithData[index][key] = value;
    setApplyWithData(newApplyWithData);
  };

  const handleDeleteRow = (index) => { // 행 삭제
    const newApplyData = applyWithData.filter((_, i) => i !== index);
    setApplyWithData(newApplyData);
  };

  const data = applyWithData.map((item, index) => ({
    number: index + 1, // 번호는 인덱스 + 1로 설정
    id: (
      <InputId
        placeholder="입력하세요."
        value={item.id}
        onChange={(e) => handleInputChange(index, "id", e.target.value)}
      />
    ),
    name: (
      <InputName
        placeholder="입력하세요."
        value={item.name}
        onChange={(e) => handleInputChange(index, "name", e.target.value)}
      />
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
            </Row>
          )}
          onDelete={handleDeleteRow}
        />
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
    width: 15%;
  }
`;

const InputId = styled.input`
  box-sizing: border-box;
  width: 242px;
  height: 43px;
  border: 1.5px solid #8aa353;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6e6e6e;

  &::placeholder {
    color: #8aa353;
    font-size: 16px;
  }
`;

const InputName = styled.input`
  box-sizing: border-box;
  width: 242px;
  height: 43px;
  border: 1.5px solid #8aa353;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6e6e6e;

  &::placeholder {
    color: #8aa353;
    font-size: 16px;
  }
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
  margin-top: 1rem;
  padding-right: 20px;
`;

const StyledAddIcon = styled(AddIcon)`
  margin: 10px;
`;

export default ApplyWith;
