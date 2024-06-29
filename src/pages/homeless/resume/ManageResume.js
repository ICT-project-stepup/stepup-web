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

  const userId = "test1"; // 예제 사용자 ID, 실제로는 로그인한 사용자의 ID를 사용
  //const baseURL = 'http://localhost:8081'; // API 서버의 baseURL을 설정

  useEffect(() => {
    axios
      .get(`/api/resume/${userId}`)
      .then((response) => {
        const { profile, careers, introduction, applyWiths } = response.data;
        console.log('API 응답 데이터:', response.data); // 응답 데이터 확인
        setProfileData(profile || {});
        setCareerData(careers || []);
        setIntroduction(introduction ? introduction.content : "");
        setApplyWithData(applyWiths || []);
        console.log('설정된 경력 데이터:', careers); // 설정된 경력 데이터 확인
      })
      .catch((error) => {
        console.error("이력서 데이터를 불러오는데 실패했습니다.", error);
      });
  }, []);

  const handleSave = async () => {
    const deletedCareers = careerData.filter((item) => item.deleted);
    
    try {
      // 1. 서버에서 삭제할 항목들을 모두 처리
      await Promise.all(
        deletedCareers.map(async (career) => {
          if (career.id) {
            await axios.delete(`/api/resume/career/${career.id}`);
          }
        })
      );
    
      // 2. 클라이언트 상태에서 삭제된 항목 제거
      const updatedCareerData = careerData.filter((item) => !item.deleted);
      setCareerData(updatedCareerData);
    
      // 3. 서버에 업데이트할 데이터 준비
      const updates = {
        careers: updatedCareerData.map((career) => ({
          id: career.id || null, // 기존 데이터를 업데이트하기 위해 고유 id 사용
          careerName: career.careerName || "",
          careerType: career.careerType || "",
          careerPeriod: `${career.periodValue || 0} ${career.periodUnit || ""}`,
          joinDate: career.joinDate || null,
          resignDate: career.resignDate || null,
        })),
        introduction: {
          id: introduction.id || null,
          content: introduction
        },
      };
    
      // 4. 필드 유효성 검사
      for (const career of updates.careers) {
        console.log(`검사 중인 경력: ${JSON.stringify(career)}`);
        if (!career.careerName.trim() || !career.careerType.trim() || !career.joinDate || !career.resignDate) {
          throw new Error("모든 필드를 채워야 합니다.");
        }
      }
  
      // 5. 서버에 업데이트 요청
      await axios.put(`/api/resume/${userId}`, updates);
      
      console.log("이력서가 성공적으로 업데이트되었습니다.");
      setIsEditing(false); // 저장 후 보기 모드로 전환
    } catch (error) {
      console.error("이력서를 업데이트하는데 실패했습니다.", error);
      if (error.message === "모든 필드를 채워야 합니다.") {
        alert("모든 필드를 채워야 합니다.");
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true); // 편집 모드로 전환
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
