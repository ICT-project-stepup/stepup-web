import React from "react";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as FarmIcon } from "../../../icons/FarmIcon.svg";
import { ReactComponent as HmlsIcon } from "../../../icons/HmlsIcon.svg";

import { useNavigate } from "react-router-dom";

/* 예은 */
export default function SignIn() {
  const navigate = useNavigate();

  const handleFarmSignInClick = () => {
    navigate("/farmsignin");
  };

  const handleHmlsSignInClick = () => {
    navigate("/homelesssignin");
  };

  return (
    <Container>
      <PageTitle text="회원가입" /> {/* PageTitle 컴포넌트 사용 */}
      <SubTitleWrapper>
        <text>사용 목적에 맞게 아래를 선택해주세요.</text>
      </SubTitleWrapper>
      <ButtonBox>
        <SignInBox onClick={handleFarmSignInClick}>
          <SubText>구직을 원하는</SubText>
          <StyledFarm />
          구직자
        </SignInBox>
        <SignInBox onClick={handleHmlsSignInClick}>
          <SubText>구인을 원하는</SubText>
          <StyledHmls />
          구인자
        </SignInBox>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: 52rem;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 0 6rem;
`;

const SubTitleWrapper = styled.div`
  width: 20.75rem;
  height: 1.625rem;
  font-family: "Pretendard-Regular";
  font-size: 1.375rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.125rem;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 17.1875rem;
  flex-direction: row;
  justify-content: center;
`;

const SignInBox = styled.button`
  box-sizing: border-box;
  width: 18.125rem;
  height: 10.875rem;
  border: 0.1875rem solid #afbfa5;
  filter: drop-shadow(0.0625rem 0.25rem 0.25rem rgba(175, 191, 165, 0.4));
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3.125rem;
  background-color: white;
  cursor: pointer;
  font-family: "Pretendard-Medium";
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6e6e;
`;

const SubText = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;
const StyledFarm = styled(FarmIcon)`
  margin-bottom: 0.625rem;
`;
const StyledHmls = styled(HmlsIcon)`
  margin-bottom: 0.625rem;
`;
