import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "../../ListStyle";

const Career = () => {
  const [careerData, setCareerData] = useState([
    {
      institution: "",
      work: "",
      periodValue: 1,
      periodUnit: "개월",
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  const careerLabel = [
    { label: "기관", key: "institution", className: "institution" },
    { label: "업무", key: "work", className: "work" },
    { label: "근무 기간", key: "period", className: "period" },
    { label: "입사연월", key: "startDate", className: "startDate" },
    { label: "퇴사연월", key: "endDate", className: "endDate" },
  ];

  const handleInputChange = (index, key, value) => {
    const newCareerData = [...careerData];
    newCareerData[index][key] = value;
    setCareerData(newCareerData);
  };

  const handleDateChange = (index, key, date) => {
    const newCareerData = [...careerData];
    newCareerData[index][key] = date;
    setCareerData(newCareerData);
  };

  const data = careerData.map((item, index) => ({
    institution: (
      <Input
        placeholder="기관을 입력하세요."
        value={item.institution}
        onChange={(e) => handleInputChange(index, "institution", e.target.value)}
      />
    ),
    work: (
      <Input
        placeholder="업무를 입력하세요."
        value={item.work}
        onChange={(e) => handleInputChange(index, "work", e.target.value)}
      />
    ),
    period: (
      <PeriodWrapper>
        <PeriodInput
          type="number"
          value={item.periodValue}
          onChange={(e) => handleInputChange(index, "periodValue", e.target.value)}
        />
        <PeriodSelect
          value={item.periodUnit}
          onChange={(e) => handleInputChange(index, "periodUnit", e.target.value)}
        >
          <option value="일">일</option>
          <option value="주">주</option>
          <option value="개월">개월</option>
          <option value="년">년</option>
        </PeriodSelect>
      </PeriodWrapper>
    ),
    startDate: (
      <DatePickerWrapper>
        <DatePicker
          selected={item.startDate}
          onChange={(date) => handleDateChange(index, "startDate", date)}
          dateFormat="yyyy년 MM월"
          showMonthYearPicker
        />
      </DatePickerWrapper>
    ),
    endDate: (
      <DatePickerWrapper>
        <DatePicker
          selected={item.endDate}
          onChange={(date) => handleDateChange(index, "endDate", date)}
          dateFormat="yyyy년 MM월"
          showMonthYearPicker
        />
      </DatePickerWrapper>
    ),
  }));

  return (
    <Container>
      <Title>경력</Title>
      <CareerBox>
      <ListStyle
        headers={careerLabel}
        data={data}
        renderRow={(item) => (
          <Row>
            <span className="institution">{item.institution}</span>
            <span className="work">{item.work}</span>
            <span className="period">{item.period}</span>
            <span className="startDate">{item.startDate}</span>
            <span className="endDate">{item.endDate}</span>
          </Row>
        )}
      />
      <AddCareerButton onClick={() => setCareerData([...careerData, { institution: "", work: "", periodValue: 1, periodUnit: "개월", startDate: new Date(), endDate: new Date() }])}>
        + 경력 추가
      </AddCareerButton>
      </CareerBox>

    </Container>
  );
};

const CareerBox = styled.div`
display: flex;
align-items: center;
//justify-content: center;
flex-direction: column;
`

const Container = styled.div`
  position: absolute;
  top: 51rem;
  left: 5.3125rem;
  width: 100%;
`;

const Title = styled.h2`
  width: 7.4375rem;
  height: 2.375rem;
  font-family: "Pretendard-Medium";
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #6e6e6e;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Input = styled.input`
  border: 1px solid #8aa353;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    input {
      width: 100%;
      border: 1px solid #8aa353;
      border-radius: 0.25rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
  }
`;

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PeriodInput = styled.input`
  border: 1px solid #8aa353;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 4rem;
  margin-right: 1rem;
`;

const PeriodSelect = styled.select`
  border: 1px solid #8aa353;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: white;
`;

const AddCareerButton = styled.button`
  border: 1px solid #8aa353;
  border-radius: 0.25rem;
  background: white;
  color: #8aa353;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 1rem;

  &:hover {
    background: #8aa353;
    color: white;
  }
`;

export default Career;
