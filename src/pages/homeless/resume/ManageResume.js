import React from "react";
import styled from "styled-components";
import ProfileInfo from "../../../components/homeless/resume/ProfileInfo";
import CareerSection from "../../../components/homeless/resume/Career";
import SelfIntroduction from "../../../components/homeless/resume/SelfIntroduction";

/* 채은 */
export default function ManageResume() {
  // 더미데이터
  const userDummy = {
    name: "이공주",
    age: "61세",
    phone: "010-1964-0711",
    email: "lookat@naver.com",
    address: "서울 용산구 한강대로92길 6 갈월동빌딩",
  };

  const userInfoArray = [
    { label: "이름", value: userDummy.name },
    { label: "나이", value: userDummy.age },
    { label: "전화번호", value: userDummy.phone },
    { label: "이메일", value: userDummy.email },
    { label: "주소", value: userDummy.address },
  ];

  return (
    <Container>
      <Text>
        <span>이력서 관리</span>
      </Text>
      <ProfileInfo userInfoArray={userInfoArray} />
      <CareerSection />
      <SelfIntroduction />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  font-family: "Pretendard-Bold";
  font-size: 3rem;
  color: #8aa353;
`;

const Text = styled.div`
  /*이력서 관리 텍스트*/
  box-sizing: border-box;
  position: absolute;
  width: 12.3125rem;
  height: 2.375rem;
  left: 5.3125rem;
  top: 11.875rem;
  background: #ffffff;
  border-left: 0.125rem solid #2b2b2b;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.375rem;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 1.25rem;
  color: #2b2b2b;
`;
