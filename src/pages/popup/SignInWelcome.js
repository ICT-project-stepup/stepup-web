import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CongratsIcon } from "../../icons/CongratsIcon.svg";
import { ReactComponent as XIcon } from "../../icons/XIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";

/* 채은 */
const NoLogIn = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <Container>
        <CloseButton onClick={handleClose}>
          <StyledXIcon />
        </CloseButton>
        <Line />
        <CompleteWrapper>
          <StyledCongratsIcon />

          <Message>
            <span>스텝업의 회원이 되신걸 축하해요!</span>
            <span>스텝업과 함께 세상으로 비상해봐요.</span>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.2);
`;

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

const StyledCongratsIcon = styled(CongratsIcon)`
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
