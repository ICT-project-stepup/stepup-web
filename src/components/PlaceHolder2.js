import React from "react";
import { styled } from "styled-components";

const PlaceHolder = React.forwardRef(
  ({ placeholder, style, type = "text", name, maxLength, ...rest }, ref) => (
    <Input
      placeholder={placeholder}
      style={style}
      type={type}
      name={name}
      maxLength={maxLength}
      ref={ref}
      {...rest}
    />
  )
);

export default PlaceHolder;

const Input = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 0.1rem solid #afbfa5;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  line-height: 24px;
  color: #8aa353;
  padding: 0 1rem;

  &::placeholder {
    color: #afbfa5;
    font-size: 1rem;
  }
  &:focus {
    border-color: #8aa353;
    outline: none;
  }
`;
