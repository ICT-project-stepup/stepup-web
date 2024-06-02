import React from "react";
import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";

const ProfileInfo = ({ userInfoArray }) => {
  return (
    <Container>
      <Title>기본 정보</Title>

      <Description>
        아래의 정보가 맞는지 확인해주세요. 다르다면 아래의
        <Highlight> 내 정보 수정</Highlight> 버튼을 눌러주세요.
      </Description>

      <InformBox>
        <StyledProfile />
        
        <Info>
          {userInfoArray.map((item, index) => (
            <InfoRow key={index}>
              <InfoLabel>{item.label}</InfoLabel>
              <InfoValue>{item.value}</InfoValue>
            </InfoRow>
          ))}
        </Info>
        <Button>내 정보 수정</Button>
      </InformBox>
    </Container>
  );
};

const Container = styled.div`
position: absolute;
top: 17.8125rem;
left: 5.3125rem;
align-items: center;
`;

const Title = styled.div`
  width: 7.4375rem;
  height: 2.375rem;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #6e6e6e;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  width: 45.75rem;
  height: 1.625rem;
  margin-left: 0.6875rem;
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: #6e6e6e;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  font-family: "Pretendard-SemiBold";
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.640625rem;
  text-align: left;
  color: #8aa353;
`;

const StyledProfile = styled(ProfileIcon)`
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  margin-top: 1.25rem;
`;

const InformBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 50.25rem;
  height: 25.3125rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  box-shadow: 0 0.25rem 0.25rem rgba(175, 191, 165, 0.4);
  margin-bottom: 2rem;
`;

const Info = styled.div`
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

export default ProfileInfo;