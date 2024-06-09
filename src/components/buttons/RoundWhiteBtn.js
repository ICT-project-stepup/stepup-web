import { styled } from "styled-components";

export default function RoundWhiteBtn({ text, icon = null, style, onClick }) {
  return (
    <Button style={style} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text}
    </Button>
  );
}

const Button = styled.div`
  position: absolute;

  // 버튼 꾸미기
  background: #ffffff;
  border-radius: 1.5625rem;

  font-size: 1.25rem;
  color: #6e6e6e;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  border: 0.1rem solid #afbfa5;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
