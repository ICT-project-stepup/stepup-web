import React from "react";
import styled from "styled-components";
import ProfileInfo from "../../../components/homeless/resume/ProfileInfo";
import Career from "../../../components/homeless/resume/Career";
import SelfIntroduction from "../../../components/homeless/resume/SelfIntroduction";
import PageTitle from "../../../components/PageTitle";
import ApplyWith from "../../../components/homeless/resume/ApplyWith";

/* 채은 */
export default function ManageResume() {
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
    </Container>
  );
}

const Container = styled.div`
  text-align: left; // App.js의 text-align: center 덮어쓰기
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  font-family: "Pretendard-Bold";
  font-size: 3rem;
`;

const TitleWrapper = styled.div`
  /*이력서 관리 텍스트*/

  left: 5.3125rem;
  top: 11.875rem;
  position: absolute;
`;
