import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "../../ListStyle";
import Calendar from "../../Calendar";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";
import { ReactComponent as DownArrowIcon } from "../../../icons/DownArrowIcon.svg";


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
      <InputInstitution
        placeholder="입력하세요."
        value={item.institution}
        onChange={(e) =>
          handleInputChange(index, "institution", e.target.value)
        }
      />
    ),
    work: (
      <InputWork
        placeholder="입력하세요."
        value={item.work}
        onChange={(e) => handleInputChange(index, "work", e.target.value)}
      />
    ),
    period: (
      <PeriodWrapper>
        <PeriodSelect
          value={item.periodValue}
          onChange={(e) =>
            handleInputChange(index, "periodValue", e.target.value)
          }
        >
          {Array.from({ length: 11 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
          <DownArrowIcon />
        </PeriodSelect>
        <PeriodUnitSelect
          value={item.periodUnit}
          onChange={(e) =>
            handleInputChange(index, "periodUnit", e.target.value)
          }
        >
          <option value="일">일</option>
          <option value="주">주</option>
          <option value="개월">개월</option>
          <option value="년">년</option>
          <DownArrowIcon />
        </PeriodUnitSelect>
      </PeriodWrapper>
    ),
    startDate: (
      <Calendar
        selectedDate={item.startDate}
        handleDateChange={(date) => handleDateChange(index, "startDate", date)}
      />
    ),
    endDate: (
      <Calendar
        selectedDate={item.endDate}
        handleDateChange={(date) => handleDateChange(index, "endDate", date)}
      />
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
        <AddCareerButton
          onClick={() =>
            setCareerData([
              ...careerData,
              {
                institution: "",
                work: "",
                periodValue: 1,
                periodUnit: "개월",
                startDate: new Date(),
                endDate: new Date(),
              },
            ])
          }
        >
          <StyledAddIcon />
          경력 추가
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
`;

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

  .institution,
  .work,
  .period,
  .startDate,
  .endDate,
`;

const InputInstitution = styled.input`
  /* 기관 입력 */

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
`;

const InputWork = styled.input`
  /* 업무 입력 */

  box-sizing: border-box;

  width: 264px;
  height: 43px;

  border: 1.5px solid #8aa353;
  border-radius: 15px;

  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #6e6e6e;
`;

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PeriodSelect = styled.select`
  //일 주 개월 년

  box-sizing: border-box;

  width: 83px;
  height: 43px;
  left: 816px;

  border: 1.5px solid #8aa353;
  border-radius: 15px;

  display: flex;
  align-items: center;
  text-align: center;
  overflow-y: auto; /* 스크롤을 가능하게 하기 위해 추가 */
  max-height: 120px; /* 처음에 4개까지만 보이도록 설정 */

  margin-right: 8px;

  // 글씨체

  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #6e6e6e;
`;

const PeriodUnitSelect = styled.select`
  box-sizing: border-box;
  width: 83px;
  height: 43px;
  border: 1.5px solid #8aa353;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6e6e;
`;

const AddCareerButton = styled.button`
  // 경력 추가 버튼

  width: 75px;
  height: 24px;
  
  font-family: 'Pretendard-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #6E6E6E;
  background-color: #FFFFFF;
  
  

cursor: pointer;


box-sizing: border-box;

width: 189px;
height: 43px;

border: 1.5px dashed #8AA353;
border-radius: 15px;
margin-top: 1rem;

`;

const StyledAddIcon = styled(AddIcon)`
margin: 10px;
`

export default Career;
