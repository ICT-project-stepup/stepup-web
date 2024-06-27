import React from "react";
import Select from "react-select";

const customStyles = {
  // 드롭다운의 기본 컨테이너 스타일

  control: (provided) => ({
    ...provided, // react-select가 기본 제공하는 스타일 포함
    width: 83,
    margin: 3,
    height: 43,
    border: "1.5px solid #8AA353",
    borderRadius: 15,
    fontFamily: "Pretendard-Medium",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#6E6E6E",
    cursor: "pointer",
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
    color: state.isSelected ? "#8AA353" : "#6E6E6E", // 현재 옵션이 선택되었는지에 따라 색상 변경
    backgroundColor: state.isSelected ? "#AFBFA540" : "#F5F5F5", // 옵션이 선택되었는지에 따라 배경 색상 변경
  }),

  singleValue: (provided) => ({
    // 선택된 항목의 텍스트 색상
    ...provided,
    color: "#6E6E6E",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0.5rem",
    color: "#8AA353", // 커스텀 화살표 색상
    "> svg": {
      width: 24,
      height: 24,
    },
  }),

  indicatorSeparator: () => ({
    // 기본으로 있던 작대기 없애기
    display: "none",
  }),

  menuList: (provided) => ({
    ...provided,
    maxHeight: 170, // 4까지만 보이도록
    overflowY: "auto", // 스크롤 추가
  }),
};

const CustomSelect = ({ styles = {}, ...props }) => {
  const combinedStyles = {
    ...customStyles,
    ...styles,
  };

  return <Select {...props} styles={combinedStyles} />;
};

export default CustomSelect;
