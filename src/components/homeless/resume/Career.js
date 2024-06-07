import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "../../ListStyle";
import Calendar from "../../Calendar";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";
import Select from "react-select";

const Career = () => {
  const [careerData, setCareerData] = useState([
    {
      institution: "",
      work: "",
      periodValue: "",
      periodUnit: "",
      startDate: null,
      endDate: null,
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

  const periodOptions = Array.from({ length: 11 }, (_, i) => ({
    // 1부터 11까지
    value: i + 1,
    label: `${i + 1}`,
  }));

  const periodUnitOptions = [
    { value: "일", label: "일" },
    { value: "주", label: "주" },
    { value: "개월", label: "개월" },
    { value: "년", label: "년" },
  ];

  const customStyles = {
    control: (provided) => ({
      // 드롭다운의 기본 컨테이너 스타일
      ...provided, // react-select가 기본 제공하는 스타일 포함
      width: 83,
      height: 43,
      border: "1.5px solid #8AA353",
      borderRadius: 15,
      fontFamily: "Pretendard-Medium",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#6E6E6E",
    }),

    menu: (provided) => ({
      // 드롭다운의 메뉴 스타일
      ...provided,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: 15,
      backgroundColor: "#F5F5F5",
      fontFamily: "Pretendard-Regular",
      fontSize: "20px",
    }),

    option: (provided, state) => ({
      // 각 옵션의 스타일
      ...provided,
      color: state.isSelected ? "#000000" : "#6E6E6E", // 현재 옵션이 선택되었는지에 따라 색상 변경
      backgroundColor: state.isSelected ? "#AFBFA540" : "#F5F5F5", // 옵션이 선택되었는지에 따라 배경 색상 변경
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#6E6E6E", // 선택된 항목의 텍스트 색상
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      color: "#8AA353", // 커스텀 화살표 색상
      "> svg": {
        width: 30,
        height: 20,
      },
    }),

    indicatorSeparator: () => ({
      display: "none", // 기본으로 있던 작대기 없애기
    }),

    menuList: (provided) => ({
      ...provided,
      maxHeight: 160, // 4까지만 보이도록
      overflowY: "auto", // 스크롤 추가
    }),
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
        <Select
          styles={customStyles}
          value={periodOptions.find(
            (option) => option.value === item.periodValue
          )}
          onChange={(selectedOption) =>
            handleInputChange(index, "periodValue", selectedOption.value)
          }
          options={periodOptions}
          placeholder=""
        />
        <Select
          styles={customStyles}
          value={periodUnitOptions.find(
            (option) => option.value === item.periodUnit
          )}
          onChange={(selectedOption) =>
            handleInputChange(index, "periodUnit", selectedOption.value)
          }
          options={periodUnitOptions}
          placeholder=""
        />
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
              <div className="institution">{item.institution}</div>
              <div className="work">{item.work}</div>
              <div className="period">{item.period}</div>
              <div className="startDate">{item.startDate}</div>
              <div className="endDate">{item.endDate}</div>
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
                periodValue: "",
                periodUnit: "",
                startDate: null,
                endDate: null,
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

const InputInstitution = styled.input`
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

const InputWork = styled.input`
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
    // 입력시 글씨크기와 색상 바뀜
    color: #8aa353;
    font-size: 16px;
  }
`;

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddCareerButton = styled.button`
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

export default Career;
