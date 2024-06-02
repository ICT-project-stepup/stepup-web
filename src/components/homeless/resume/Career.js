import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CareerSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <SectionTitle>경력</SectionTitle>
      <Table>
        <thead>
          <tr>
            <th>기관</th>
            <th>업무</th>
            <th>근무 기간</th>
            <th>입사연월</th>
            <th>퇴사연월</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Input placeholder="입력하세요." />
            </td>
            <td>
              <Input placeholder="입력하세요." />
            </td>
            <td>
              <Input placeholder="입력하세요." />
            </td>
            <td>
              <DatePickerWrapper>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy년 MM월"
                  showMonthYearPicker
                />
              </DatePickerWrapper>
            </td>
            <td>
              <DatePickerWrapper>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="yyyy년 MM월"
                  showMonthYearPicker
                />
              </DatePickerWrapper>
            </td>
          </tr>
        </tbody>
      </Table>
      <AddCareerButton>+ 경력 추가</AddCareerButton>
    </>
  );
};

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th,
  td {
    border: 1px solid #dcdcdc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    font-weight: 600;
  }

  td {
    input {
      width: 100%;
      box-sizing: border-box;
    }
  }
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

const AddCareerButton = styled.button`
  border: 1px solid #8aa353;
  border-radius: 0.25rem;
  background: white;
  color: #8aa353;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #8aa353;
    color: white;
  }
`;

export default CareerSection;
