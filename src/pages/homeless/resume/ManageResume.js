import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileInfo from "../../../components/homeless/resume/ProfileInfo";
import Career from "../../../components/homeless/resume/Career";
import SelfIntroduction from "../../../components/homeless/resume/SelfIntroduction";
import PageTitle from "../../../components/PageTitle";
import ApplyWith from "../../../components/homeless/resume/ApplyWith";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import axios from "axios";

/* 채은 */
export default function ManageResume() {
  // ProfileInfo 더미데이터
  // const initialProfileData = {
  //   name: "이공주",
  //   age: "61세",
  //   phone: "010-1964-0711",
  //   email: "lookat@naver.com",
  //   address: "서울 용산구 한강대로92길 6 갈월동빌딩",
  //   gender: "여자"
  // };

  // SelfIntroduction 더미데이터
  const [introduction, setIntroduction] = useState("");

  const [profileData, setProfileData] = useState("");
  const [careerData, setCareerData] = useState([]);
  const [applyWithData, setApplyWithData] = useState([]);
  const [isEditing, setIsEditing] = useState(true); // 초기 모드를 편집 모드로 설정

  const userId = 1; // 예제 사용자 ID, 실제로는 로그인한 사용자의 ID를 사용
  const baseURL = 'http://localhost:8081'; // API 서버의 baseURL을 설정

  useEffect(() => {
    axios
      .get(`${baseURL}/api/resume/${userId}`)
      .then((response) => {
        const { profile, careers, introduction, applyWiths } = response.data;
        setProfileData(profile || {});
        setCareerData(careers || []);
        setIntroduction(introduction ? introduction.content : "");
        setApplyWithData(applyWiths || []);
      })
      .catch((error) => {
        console.error("이력서 데이터를 불러오는데 실패했습니다.", error);
      });
  }, [userId]);

  const handleSave = () => {
    const updates = {
      careers: careerData,
      introduction: introduction ? { content: introduction } : null,
      applyWiths: applyWithData
    };

    axios
      .put(`${baseURL}/api/resume/${userId}`, updates)
      .then((response) => {
        console.log("이력서가 성공적으로 업데이트되었습니다.", response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("이력서를 업데이트하는데 실패했습니다.", error);
      });
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
    width: "15rem", 
    height: "4.1rem",
    fontFamily: "Pretendard-SemiBold",
    fontSize: "1.75rem",
    border: "0.15rem solid #8AA353"
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
