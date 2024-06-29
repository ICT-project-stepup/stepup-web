import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ListStyle from "./ListStyle";
import Calendar from "../../Calendar";
import { ReactComponent as AddIcon } from "../../../icons/AddIcon.svg";
import CustomSelect from "../../CustomSelect";
import axios from "axios";

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

  const handleDeleteRow = async (index) => {
    const careerId = careerData[index].careerId;
    if (!careerId) {
      console.error("Failed to delete career: careerId is undefined");
      const newCareerData = careerData.filter((_, i) => i !== index);
      setCareerData(newCareerData);
      return;
    }
    try {
      await axios.delete(`/api/resume/career/${careerId}`);
      const newCareerData = careerData.filter((_, i) => i !== index);
      setCareerData(newCareerData);
    } catch (error) {
      console.error("Failed to delete career", error);
    }
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
          isEditing={isEditing}
        />
        {isEditing && (
          <ButtonWrapper>
            <AddCareerButton
              onClick={() =>
                setCareerData([
                  ...careerData,
                  {
                    careerId: null,
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
          </ButtonWrapper>
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

const InputWork = styled.input`
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

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 0.1rem #6E6E6E;
`;

const AddCareerButton = styled.button`
  width: 11.813rem;
  height: 2.688rem;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e6e6e;
  background-color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  border: 0.1rem dashed #8aa353;
  border-radius: 1rem;
`;

const StyledAddIcon = styled(AddIcon)`
  margin: 0.625rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 1rem;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  color: #6e6e6e;
  text-align: center;
  width: 100%;
  max-width: 13.75rem;

  color: ${({ isEditing }) =>
    isEditing ? "#6e6e6e" : "#2B2B2B"}; // 읽기모드와 편집모드에 따라 다름
  background: ${({ isEditing }) => (isEditing ? "#f5f5f5" : "none")};
`;

export default Career;
