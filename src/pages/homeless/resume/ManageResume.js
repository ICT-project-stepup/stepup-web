import React from "react";
import styled from "styled-components";
import ProfileInfo from "../../../components/homeless/resume/ProfileInfo";
import Career from "../../../components/homeless/resume/Career";
import SelfIntroduction from "../../../components/homeless/resume/SelfIntroduction";
import PageTitle from "../../../components/PageTitle";
import ApplyWith from "../../../components/homeless/resume/ApplyWith";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";

/* 채은 */
export default function ManageResume() {
  const navigate = useNavigate();

  // ProfileInfo 더미데이터
  const profileData = {
    name: "이공주",
    age: "61세",
    phone: "010-1964-0711",
    email: "lookat@naver.com",
    address: "서울 용산구 한강대로92길 6 갈월동빌딩",
  };

  return (
    <Container>
      <TitleWrapper>
        <PageTitle text="이력서 관리" /> {/* PageTitle 컴포넌트 사용 */}
      </TitleWrapper>
      <ProfileInfo profileData={profileData} />
      <Career />
      <SelfIntroduction />
      <ApplyWith />

      <ButtonContainer>
        <RoundWhiteBtn
          text="저장하기"
          style={btnStyle}
          onClick={() => {
            navigate("/");
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

const btnStyle = {
  width: "241px",
  height: "67px",
};

const Container = styled.div`
  text-align: left; // App.js의 text-align: center 덮어쓰기
  margin-top: 6rem;
  font-family: "Pretendard-Bold";
  font-size: 3rem;
`;

const TitleWrapper = styled.div`
  /*이력서 관리 텍스트*/

  left: 5.3125rem;
  top: 11.875rem;
  position: absolute;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 7rem;
`;
