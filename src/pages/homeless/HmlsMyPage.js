// HmlsMyPage.js

import { styled } from "styled-components";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import { ReactComponent as ResumeIcon } from "../../icons/ResumeIcon.svg";
import { ReactComponent as ApplyIcon } from "../../icons/ApplyIcon.svg";
import { ReactComponent as SaveIcon } from "../../icons/SaveIcon.svg";
import { useNavigate } from "react-router-dom";

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
        <Text>이공주 님</Text>
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
  width: 1206px;
  height: 467px;
  // top: 310px;
  border: 3px solid rgba(175, 191, 165, 0.4);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Content와 ButtonBox 사이의 간격 */
`;

const StyledProfile = styled(ProfileIcon)`
  // 프로필 이미지
  margin-right: 20px;
`;

const Text = styled.span`
  /* 이공주 님 */

  left: 46.81%;
  right: 43.96%;
  top: 39.84%;
  bottom: 55.96%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #8aa353;

  margin-right: 20px; /* 텍스트와 버튼 사이의 간격 */
`;

const ChangeInformBtn = styled.button`
  /* 정보 수정 버튼 */

  box-sizing: border-box;

  width: 115px;
  height: 43px;
  left: 831px;
  top: 408px;

  border: 1.5px solid #afbfa5;
  border-radius: 15px;

  color: #6e6e6e;

  cursor: pointer;

  background-color: white;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const ResumeBox = styled.button`
  /* 이력서 관리 버튼 */

  box-sizing: border-box;

  width: 290px;
  height: 174px;

  border: 3px solid #afbfa5;
  filter: drop-shadow(1px 4px 4px rgba(175, 191, 165, 0.4));
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 50px;

  background-color: white;
  cursor: pointer;

  // 이력서 관리 텍스트
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #6e6e6e;
`;

const StyledResume = styled(ResumeIcon)`
  margin-bottom: 10px; /* 아이콘과 텍스트 사이의 간격 */
`;

const ApplyBox = styled.button`
  /* 지원 현황 버튼 */

  box-sizing: border-box;

  width: 290px;
  height: 174px;

  border: 3px solid #afbfa5;
  filter: drop-shadow(1px 4px 4px rgba(175, 191, 165, 0.4));
  border-radius: 40px;

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
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #6e6e6e;
`;

const StyledApply = styled(ApplyIcon)`
  margin-bottom: 10px; /* 아이콘과 텍스트 사이의 간격 */
`;

const SaveBox = styled.button`
  /* 저장한 글 버튼 */

  box-sizing: border-box;

  width: 290px;
  height: 174px;

  border: 3px solid #afbfa5;
  filter: drop-shadow(1px 4px 4px rgba(175, 191, 165, 0.4));
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 50px;

  background-color: white;
  cursor: pointer;

  // 저장한 글 텍스트

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #6e6e6e;
`;

const StyledSave = styled(SaveIcon)`
  margin-bottom: 10px; /* 아이콘과 텍스트 사이의 간격 */
`;
