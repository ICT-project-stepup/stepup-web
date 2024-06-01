// HmlsMyPage.js

import { styled } from "styled-components";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import { ReactComponent as ResumeIcon } from "../../icons/ResumeIcon.svg";
import { ReactComponent as ApplyIcon } from "../../icons/ApplyIcon.svg";
import { ReactComponent as SaveIcon } from "../../icons/SaveIcon.svg";
import { useNavigate } from "react-router-dom";

const userDummy = {
  name: "이공주",
};

/* 채은 */
export default function HmlsMyPage() {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate("/manageresume");
  };

  const handleApplyClick = () => {
    navigate("/applicationhistory");
  };

  const handleSaveClick = () => {
    navigate("/interestpost");
  };

  return (
    <Test>
      <Content>
        <StyledProfile />
        <Text>{userDummy.name}</Text>
        <ChangeInformBtn>정보 수정</ChangeInformBtn>
      </Content>

      <ButtonBox>
        <ResumeBox onClick={handleResumeClick}>
          <StyledResume />
          이력서 관리
        </ResumeBox>

        <ApplyBox onClick={handleApplyClick} x>
          <StyledApply />
          지원 현황
        </ApplyBox>

        <SaveBox onClick={handleSaveClick}>
          <StyledSave />
          저장한 글
        </SaveBox>
      </ButtonBox>
    </Test>
  );
}

const Test = styled.div`
  /* 전체 네모 박스 */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  width: 75.375rem;
  height: 29.1875rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const StyledProfile = styled(ProfileIcon)`
  // 프로필 이미지
  margin-right: 1.25rem;
`;

const Text = styled.span`
  /* 이공주 님 */

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

const ChangeInformBtn = styled.button`
  /* 정보 수정 버튼 */

  box-sizing: border-box;
  width: 7.1875rem;
  height: 2.6875rem;
  border: 0.09375rem solid #afbfa5;
  border-radius: 0.9375rem;
  color: #6e6e6e;
  cursor: pointer;
  background-color: white;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4925rem;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const ResumeBox = styled.button`
  /* 이력서 관리 버튼 */

  box-sizing: border-box;
  width: 18.125rem;
  height: 10.875rem;
  border: 0.1875rem solid #afbfa5;
  filter: drop-shadow(0.0625rem 0.25rem 0.25rem rgba(175, 191, 165, 0.4));
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3.125rem;
  background-color: white;
  cursor: pointer;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6e6e;
`;

const StyledResume = styled(ResumeIcon)`
  margin-bottom: 0.625rem;
`;

const ApplyBox = styled.button`
  /* 지원 현황 버튼 */

  box-sizing: border-box;
  width: 18.125rem;
  height: 10.875rem;
  border: 0.1875rem solid #afbfa5;
  filter: drop-shadow(0.0625rem 0.25rem 0.25rem rgba(175, 191, 165, 0.4));
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;

  // 지원 현황 텍스트

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6e6e;
`;

const StyledApply = styled(ApplyIcon)`
  margin-bottom: 0.625rem;
`;

const SaveBox = styled.button`
  /* 저장한 글 버튼 */

  box-sizing: border-box;
  width: 18.125rem;
  height: 10.875rem;
  border: 0.1875rem solid #afbfa5;
  filter: drop-shadow(0.0625rem 0.25rem 0.25rem rgba(175, 191, 165, 0.4));
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 3.125rem;
  background-color: white;
  cursor: pointer;

  // 저장한 글 텍스트

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6e6e;
`;

const StyledSave = styled(SaveIcon)`
  margin-bottom: 0.625rem;
`;
