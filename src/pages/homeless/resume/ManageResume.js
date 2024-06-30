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
  const [introduction, setIntroduction] = useState("");
  const [profileData, setProfileData] = useState({});
  const [careerData, setCareerData] = useState([]);
  const [applyWithData, setApplyWithData] = useState([]);
  const [isEditing, setIsEditing] = useState(true);
  const [deletedCareers, setDeletedCareers] = useState([]);

  const userId = "test1";

  useEffect(() => {
    axios
      .get(`/api/resume/${userId}`)
      .then((response) => {
        const { profile, careers, introduction, applyWiths } = response.data;
        console.log("API 응답 데이터:", response.data);
        setProfileData(profile || {});
        setCareerData(careers || []);
        setIntroduction(introduction ? introduction.content : "");
        setApplyWithData(applyWiths || []);
        console.log("설정된 경력 데이터:", careers);
      })
      .catch((error) => {
        console.error("이력서 데이터를 불러오는데 실패했습니다.", error);
      });
  }, []);

  const handleDeleteRow = (index) => {
    const careerToDelete = careerData[index];
    if (careerToDelete.id) {
      setDeletedCareers((prev) => [...prev, careerToDelete.id]);
    }
    const newCareerData = careerData.filter((_, i) => i !== index); // 즉시 클라이언트에서 데이터 제거
    setCareerData(newCareerData);
  };

  const handleSave = async () => {
    try {
      // 서버에 삭제 요청 보내기
      await Promise.all(
        deletedCareers.map(async (careerId) => {
          await axios.delete(`/api/resume/career/${careerId}`);
        })
      );

      // 삭제된 경력을 제외한 경력 데이터
      const updates = {
        careers: careerData.map((career) => ({
          id: career.id || undefined,
          careerName: career.careerName || "",
          careerType: career.careerType || "",
          periodValue: career.periodValue || 1, // 기본 값 설정
          periodUnit: career.periodUnit || "개월", // 기본 값 설정
          joinDate: career.joinDate || null,
          resignDate: career.resignDate || null,
        })),
        introduction: {
          id: introduction.id || null,
          content: introduction,
        },
      };

      for (const career of updates.careers) {
        if (!career.careerName.trim() || !career.careerType.trim() || !career.joinDate || !career.resignDate) {
          throw new Error("모든 필드를 채워야 합니다.");
        }
      }

      await axios.put(`/api/resume/${userId}`, updates);

      setDeletedCareers([]); // 초기화
      setIsEditing(false);
    } catch (error) {
      console.error("이력서를 업데이트하는데 실패했습니다.", error);
      if (error.message === "모든 필드를 채워야 합니다.") {
        alert("모든 필드를 채워야 합니다.");
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Container>
      <TitleWrapper>
        <PageTitle text="이력서 관리" />
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
        onDeleteRow={handleDeleteRow}
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
          <RoundWhiteBtn text="저장하기" style={btnStyle} onClick={handleSave} />
        ) : (
          <RoundWhiteBtn text="수정하기" style={btnStyle} onClick={handleEdit} />
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
