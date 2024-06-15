import { styled } from "styled-components";

export default function PlaceHolder({ text, style, isEditing, type = "text" }) {
  return <Input placeholder={text} style={style} readOnly={!isEditing} type={type} />;
}

const Input = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 1.5px solid #d9d9d9;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  line-height: 24px;
  color: #6e6e6e;

  &::placeholder {
    color: ${({ style }) => style?.color || '#6e6e6e'};
    font-size: ${({ style }) => style?.fontSize || '16px'};
  }
`;
