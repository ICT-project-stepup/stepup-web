import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import ko from "date-fns/locale/ko"; // 한국어 로케일 임포트
import { ReactComponent as LeftArrowIcon } from "../icons/LeftArrowIcon.svg";
import { ReactComponent as RightArrowIcon } from "../icons/RightArrowIcon.svg";
import { ReactComponent as CalendarIcon } from "../icons/CalendarIcon.svg";

// 한국어 로케일 등록
registerLocale("ko", ko);

const Calendar = ({ selectedDate, handleDateChange}) => {
  return (
    <DatePickerWrapper>
      <DatePickerContainer>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}

          dateFormat="yyyy년 MM월 dd일"
          locale="ko" // 로케일 설정

          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-header">
              <button
                className="icon-button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <LeftArrowIcon />
              </button>

              <span className="current-month">
                {date.getFullYear()}년 {date.getMonth() + 1}월
              </span>

              <button
                className="icon-button"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <RightArrowIcon />
              </button>
              
            </div>
          )}
        />

        <CalendarIconWrapper>
          <CalendarIcon />
        </CalendarIconWrapper>
      </DatePickerContainer>
    </DatePickerWrapper>
  );
};

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const DatePickerWrapper = styled.div`
  .react-datepicker {
    width: 387px;
    height: 323.56px;
    background: #f5f5f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-datepicker__header {
    background: #f5f5f5;
    border-bottom: none;
    padding: 10px;
  }

  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      // 날짜 박스
      box-sizing: border-box;
      width: 100%;
      max-width: 210px;
      height: 43px;
      border: 1.5px solid #8aa353;
      border-radius: 15px;
      font-family: "Pretendard-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #6e6e6e;
      padding-right: 40px; // 아이콘 공간 확보
      padding-left: 10px;

      cursor: pointer;
    }
  }

  .react-datepicker__current-month {
    font-family: "Pretendard-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    color: #8aa353;
  }

  .react-datepicker__day--selected {
    background: rgba(175, 191, 165, 0.25);
    border-radius: 10px;
    width: 63px;
    height: 35px;
    align-items: center;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    font-family: "Inter-Medium";
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #6e6e6e;
    width: 47px;
    height: 28px;
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

  .custom-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-header .icon-button {
    // 화살표 버튼

    background: none;
    border: none;
    cursor: pointer;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 10px;
    padding-bottom: 10px;
  }

  .custom-header .current-month {
    font-family: "Pretendard-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    margin-top: 10px;
    color: #8aa353;
    padding-bottom: 10px;
  }
`;

const CalendarIconWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 7px;
`;

export default Calendar;
