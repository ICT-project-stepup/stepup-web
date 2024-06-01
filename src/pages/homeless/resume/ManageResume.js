// ManageResume.js

import React, { useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";

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
    <Test>
      <Text>
        <span>이력서 관리</span>
      </Text>

      <Inform>
        <span className="title">기본 정보</span>
        <span className="description">
          아래의 정보가 맞는지 확인해주세요. 다르다면 아래의{" "}
          <span className="highlight">내 정보 수정</span> 버튼을 눌러주세요.
        </span>
        <InformBox>
          <StyledProfile />

          <Info>
            {userInfoArray.map((info, index) => (
              <InfoRow key={index}>
                <InfoLabel>{info.label}</InfoLabel>
                <InfoValue>{info.value}</InfoValue>
              </InfoRow>
            ))}
          </Info>

          <Button>내 정보 수정</Button>
        </InformBox>
      </Inform>
    </Test>
  );
}

const Test = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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

const Inform = styled.div`
  /* 기본 정보 */

  position: absolute;
  top: 17.8125rem;
  left: 5.3125rem;
  align-items: center;

  // 기본 정보 텍스트
  .title {
    width: 7.4375rem;
    height: 2.375rem;
    font-family: "Pretendard-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    color: #6e6e6e;
    margin-right: 1.25rem;
  }

  // 설명
  .description {
    width: 45.75rem;
    height: 1.625rem;
    margin-left: 0.6875rem;
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 1.625rem;
    color: #6e6e6e;
  }

  .highlight {
    font-family: "Pretendard-SemiBold";
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.640625rem;
    text-align: left;
    color: #8aa353;
  }
`;

const StyledProfile = styled(ProfileIcon)`
  // 프로필 이미지
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  margin-top: 1.25rem;
`;

const InformBox = styled.div`
  /* 기본 정보 박스 */

  box-sizing: border-box;
  display: flex;
  width: 50.25rem;
  height: 25.3125rem;
  margin-top: 1.25rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  position: absolute;
`;

const Info = styled.div`
  /* 정보 데이터들 */

  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  margin-top: 2.5rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const InfoLabel = styled.div`
  width: 7.5rem;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
`;

const InfoValue = styled.div`
  /* 정보 데이터 */
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.625rem;
  display: flex;
  align-items: center;
  color: #8aa353;
`;

const Button = styled.button`
  /* 내 정보 수정 버튼 */

  position: absolute;

  // 버튼 크기

  width: 11.5rem;
  height: 2.75rem;

  // 버튼 위치

  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 버튼 꾸미기

  background: #8aa353;
  border-radius: 1.5625rem;

  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  border: none;
  cursor: pointer;

  color: #ffffff;
`;
