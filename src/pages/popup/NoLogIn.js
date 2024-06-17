import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NoHandIcon } from "../../icons/NoHandIcon.svg";
import { ReactComponent as XIcon } from "../../icons/XIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";

const NoLogIn = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/homelessmypage");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <CloseButton onClick={handleClose}>
        <StyledXIcon />
      </CloseButton>
      <Line />
      <CompleteWrapper>
        <StyledNoHandIcon />
        

        <Message>
          <span>앗! 해당 기능은</span>
          <span>로그인 후 이용하실 수 있어요.</span>
        </Message>
        <RoundWhiteBtn
          text={"로그인하러 가기"}
          onClick={handleLoginClick}
          style={{
            boxSizing: "border-box",
            width: "13.3125rem",
            height: "3.1875rem",
            cursor: "pointer",
            fontFamily: "Pretendard-Medium",
            fontSize: "1.5rem",
            lineHeight: "1.79rem",
            position: "absolute",
            border: "0.125rem solid #afbfa5",
            borderRadius: "0.9375rem",
            marginTop: "15rem",
          }}
        />
      </CompleteWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 41.125rem;
  height: 23.75rem;
  text-align: center;
  border-radius: 40px;
  box-sizing: border-box;
  font-family: Pretendard-Medium;
  font-size: 24px;
  color: #6e6e6e;
  box-shadow: 1px 4px 4px rgba(175, 191, 165, 0.4);
  background: #ffffff;
  padding: 1rem;
`;

const StyledXIcon = styled(XIcon)`
  margin-left: 36.1875rem;
  margin-top: 0.7rem;
`;

const StyledNoHandIcon = styled(NoHandIcon)`
  margin-right: 6rem;
`;

const CloseButton = styled.button`
  top: 1.5625rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #8aa353;
  margin: 1rem 0;
  border: 0.125rem;
`;

const CompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 0.5rem;
  }
`;

export default NoLogIn;
