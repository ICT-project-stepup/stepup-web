import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import ko from "date-fns/locale/ko"; // 한국어 로케일 임포트

// 한국어 로케일 등록
registerLocale("ko", ko);

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePickerWrapper>
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy년 MM월 dd일"
        locale="ko" // 로케일 설정
      />
    </DatePickerWrapper>
  );
};

const DatePickerWrapper = styled.div`
  .react-datepicker {
    width: 387px;
    height: 323.56px;
    background: #f5f5f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    border: none;
  }

  .react-datepicker__header {
    background: #f5f5f5;
    border-bottom: none;
  }

  .react-datepicker__input-container {
    input {
      box-sizing: border-box;
      width: 176px;
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
    }
  }

  .react-datepicker__current-month {
    font-family: "Pretendard-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    align-items: center;
    color: #8aa353;
  }

  .react-datepicker__day--selected {
    background: rgba(175, 191, 165, 0.25);
    border-radius: 10px;
    width: 63px;
    height: 35px;
  }

  .react-datepicker__day {
    font-family: "Inter-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    text-align: center;
    text-transform: uppercase;
    color: #6e6e6e;

    width: 36px; /* 크기 조정 */
    height: 36px; /* 크기 조정 */

    margin: 1px; /* 간격 조정 */
  }

  .react-datepicker__day-name {
    font-family: "Inter-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: #6e6e6e;

    width: 36px; /* 크기 조정 */
    height: 36px; /* 크기 조정 */
    margin: 1px; /* 간격 조정 */
  }

  .react-datepicker__day:nth-child(7) {
    color: #6698d2; /* 토요일 날짜 파란색 */
  }

  .react-datepicker__day:nth-child(1) {
    color: #d66f6f; /* 일요일 날짜 빨간색 */
  }

  .react-datepicker__day-name:nth-child(1) {
    color: #d66f6f; /* 일요일 이름 빨간색 */
  }

  .react-datepicker__day-name:nth-child(7) {
    color: #6698d2; /* 토요일 이름 빨간색 */
  }

  .react-datepicker__day--today {
    color: #8aa353;
  }

  .react-datepicker__day--outside-month {
    visibility: hidden; /* 다음달과 이전달 날짜 숨기기 */
  }
`;

const StyledDatePicker = styled(DatePicker)`
  .react-datepicker__input-container input {
    box-sizing: border-box;
    width: 176px;
    height: 43px;
    left: 942px;
    top: 949px;
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
  }
`;

export default Calendar;
