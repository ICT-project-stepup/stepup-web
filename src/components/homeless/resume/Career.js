import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "../../ListStyle";
import Calendar from "../../Calendar";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";
import CustomSelect from "../../CustomSelect";

const Career = ({ isEditing, careerData, setCareerData }) => {
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

  const handleDeleteRow = (index) => {
    const newCareerData = careerData.filter((_, i) => i !== index);
    setCareerData(newCareerData);
  };

  const periodOptions = Array.from({ length: 11 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const periodUnitOptions = [
    { value: "일", label: "일" },
    { value: "주", label: "주" },
    { value: "개월", label: "개월" },
    { value: "년", label: "년" },
  ];

  const data = careerData.map((item, index) => ({
    institution: isEditing ? (
      <InputInstitution
        placeholder="입력하세요."
        value={item.institution}
        onChange={(e) =>
          handleInputChange(index, "institution", e.target.value)
        }
      />
    ) : (
      <Text>{item.institution}</Text>
    ),

    work: isEditing ? (
      <InputWork
        placeholder="입력하세요."
        value={item.work}
        onChange={(e) => handleInputChange(index, "work", e.target.value)}
      />
    ) : (
      <Text>{item.work}</Text>
    ),

    period: isEditing ? (
      <PeriodWrapper>
        <CustomSelect
          value={periodOptions.find(
            (option) => option.value === item.periodValue
          )}
          onChange={(selectedOption) =>
            handleInputChange(index, "periodValue", selectedOption.value)
          }
          options={periodOptions}
          placeholder=""
        />
        <CustomSelect
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
    ) : (
      <Text>{`${item.periodValue} ${item.periodUnit}`}</Text>
    ),

    startDate: isEditing ? (
      <Calendar
        selectedDate={item.startDate}
        handleDateChange={(date) => handleDateChange(index, "startDate", date)}
      />
    ) : (
      <Text>{item.startDate ? item.startDate.toLocaleDateString() : ""}</Text>
    ),

    endDate: isEditing ? (
      <Calendar
        selectedDate={item.endDate}
        handleDateChange={(date) => handleDateChange(index, "endDate", date)}
      />
    ) : (
      <Text>{item.endDate ? item.endDate.toLocaleDateString() : ""}</Text>
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
          onDelete={handleDeleteRow}
          isEditing={isEditing} // isEditing prop 추가
        />
        {isEditing && (
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
        )}
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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
    width: auto;
  }
`;

const InputInstitution = styled.input`
  box-sizing: border-box;
  width: 100%; /* 너비를 100%로 설정하여 가변적으로 조정 */
  max-width: 220px;
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
  width: 100%; /* 너비를 100%로 설정하여 가변적으로 조정 */
  max-width: 220px;
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

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 20px;
  color: #6e6e6e;
  text-align: center;
  width: 100%;
  max-width: 220px;

  color: ${({ isEditing }) =>
    isEditing ? "#6e6e6e" : "#2B2B2B"}; // 읽기모드와 편집모드에 따라 다름
  background: ${({ isEditing }) => (isEditing ? "#f5f5f5" : "none")};
`;

export default Career;
