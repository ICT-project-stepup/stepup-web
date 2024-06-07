import React from "react";
import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";
import RoundGreenBtn from "../../buttons/RoundGreenBtn";
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ profileData }) => {
  const navigate = useNavigate();

  const profileInfoLabel = [
    { label: "이름", value: profileData.name },
    { label: "나이", value: profileData.age },
    { label: "전화번호", value: profileData.phone },
    { label: "이메일", value: profileData.email },
    { label: "주소", value: profileData.address },
  ];

  return (
    <Container>
      <Title>기본 정보</Title>

      <Description>
        아래의 정보가 맞는지 확인해주세요. 다르다면 아래의
        <Highlight> 내 정보 수정</Highlight> 버튼을 눌러주세요.
      </Description>

      <InformBox>
        <InfoWrapper>
          <StyledProfile />
          <Info>
            {profileInfoLabel.map((item, index) => (
              <InfoRow key={index}>
                <InfoLabel>{item.label}</InfoLabel>
                <InfoValue>{item.value}</InfoValue>
              </InfoRow>
            ))}
          </Info>
        </InfoWrapper>

        <BtnContainer>
          <RoundGreenBtn
            text="내 정보 수정"
            style={btnStyle}
            onClick={() => {
              navigate("/homelessmodifyinfo"); // 버튼 클릭시 노숙인 회원정보수정으로 이동
            }}
          />
        </BtnContainer>
      </InformBox>
    </Container>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  left: 5.3125rem;
  margin-top: 2rem;
`;

const Title = styled.div`
  width: 7.4375rem;
  height: 2.375rem;
  font-family: "Pretendard-Medium";
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
  flex-direction: column;
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const btnStyle = {
  width: "11.5rem",
  height: "2.75rem",
};

export default ProfileInfo;
