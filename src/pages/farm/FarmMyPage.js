import React from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";

const userDummy = {
  name: "박농가",
};

/* 예은 */
export default function FarmMyPage() {
  const navigate = useNavigate();

  const handleModifyClick = () => {
    navigate("/farmmodifyinfo");
  };

  return (
    <Container>
      <PageTitle text="내 정보" />
      <ProfileBox>
        <StyledProfile />
        <Text>{userDummy.name} 님</Text>
        <RoundWhiteBtn
          text="정보 수정"
          onClick={handleModifyClick}
          style={{
            width: "7.1875rem",
            height: "2.6875rem",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.25rem",
            borderRadius: "0.9375rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "7.75rem",
            position: "relative",
          }}
        />
      </ProfileBox>

      <PageTitle text="내가 쓴 글" style={{ position: "relative" }} />
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: auto;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 2rem 6rem;
  font-family: Pretendard-Medium;
  font-size: 1.5rem;
  color: #2e2e2e;
`;

const ProfileBox = styled.div`
  /* 프로필 네모 박스 */
  margin-top: 5.9375rem;
  margin-bottom: 3.375rem;
  width: 41.25rem;
  height: 13.125rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.25rem 0.25rem rgba(175, 191, 165, 0.4); // 테두리에만 그림자 추가
`;

const StyledProfile = styled(ProfileIcon)`
  // 프로필 이미지
  margin-right: 1.25rem;
`;

const Text = styled.span`
  left: 46.81%;
  right: 43.96%;
  top: 39.84%;
  bottom: 55.96%;
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  color: #8aa353;
  margin-right: 1.25rem;
`;
