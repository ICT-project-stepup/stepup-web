import { styled } from "styled-components";

export default function PlaceHolder({ text }) {
  return <Input placeholder={text} />;
}

const Input = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 1.5px solid #d9d9d9;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6e6e6e;

  &::placeholder {
    color: #6e6e6e;
    font-size: 16px;
  }
`;
