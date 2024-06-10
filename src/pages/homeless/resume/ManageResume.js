import React, { useState } from "react";
import styled from "styled-components";
import ProfileInfo from "../../../components/homeless/resume/ProfileInfo";
import Career from "../../../components/homeless/resume/Career";
import SelfIntroduction from "../../../components/homeless/resume/SelfIntroduction";
import PageTitle from "../../../components/PageTitle";
import ApplyWith from "../../../components/homeless/resume/ApplyWith";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";

/* 채은 */
export default function ManageResume() {
  // ProfileInfo 더미데이터
  const initialProfileData = {
    name: "이공주",
    age: "61세",
    phone: "010-1964-0711",
    email: "lookat@naver.com",
    address: "서울 용산구 한강대로92길 6 갈월동빌딩",
  };

  // SelfIntroduction 더미데이터
  const [introduction, setIntroduction] = useState("");

  const [profileData, setProfileData] = useState(initialProfileData);
  const [careerData, setCareerData] = useState([]);
  const [applyWithData, setApplyWithData] = useState([]);
  const [isEditing, setIsEditing] = useState(true); // 초기 모드를 편집 모드로 설정

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Container>
      <TitleWrapper>
        <PageTitle text="이력서 관리" /> {/* PageTitle 컴포넌트 사용 */}
      </TitleWrapper>
      <ProfileInfo
        profileData={profileData}
        isEditing={isEditing}
        setProfileData={setProfileData}
      />
      <Career
        isEditing={isEditing}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <SelfIntroduction
        introduction={introduction}
        setIntroduction={setIntroduction}
        isEditing={isEditing}
      />
      <ApplyWith
        isEditing={isEditing}
        applyWithData={applyWithData}
        setApplyWithData={setApplyWithData}
      />

      <ButtonContainer>
        {isEditing ? (
          <RoundWhiteBtn
            text="저장하기"
            style={btnStyle}
            onClick={handleSave}
          />
        ) : (
          <RoundWhiteBtn
            text="수정하기"
            style={btnStyle}
            onClick={handleEdit}
          />
        )}
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

  padding: 2rem 6rem 0 6rem; // 페이지 여백 조절
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
  margin-top: 4rem;
  margin-bottom: 7rem;
`;
