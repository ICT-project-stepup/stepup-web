import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

export default function PlaceHolder({ text, style, isEditing, type = "text", defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setIsChanged(false);
    }
  }, [isEditing]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value !== defaultValue) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Input
      placeholder={text}
      style={style}
      readOnly={!isEditing}
      type={type}
      value={value}
      onChange={handleChange}
      isEditing={isEditing}
      isChanged={isChanged}
    />
  );
}

const Input = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 1.5px solid ${({ isEditing, isChanged }) => (isEditing && isChanged ? "#AFBFA5" : "#d9d9d9")};
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  line-height: 24px;
  color: ${({ isEditing, isChanged }) => (isEditing && isChanged ? "#8AA353" : "#6e6e6e")};
  transition: border-color 0.3s;

  &:focus {
   border-color: ${({ isEditing }) => (isEditing ? "#AFBFA5" : "#d9d9d9")};
    outline: none; /* 기본 포커스 스타일 제거 */
  }

  &::placeholder {
    color: ${({ style }) => style?.color || "#6e6e6e"};
    font-size: ${({ style }) => style?.fontSize || "16px"};
  }
`;
