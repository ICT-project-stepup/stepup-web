import React from "react";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";

/* 예은 */
export default function HmlsSignIn() {
  const navigate = useNavigate();

  const handlePicClick = () => {
    navigate("/manageresume");
  };

  return (
    <Container>
      <PageTitle text="회원가입" />
      <SubText>사진</SubText>
      <DefaultPic>
        <StyledProfile />
        <RoundWhiteBtn
          text="사진 등록"
          onClick={handlePicClick}
          style={{
            boxSizing: "border-box",
            width: "7.1875rem",
            height: "2.6875rem",
            borderRadius: "0.9375rem",
            color: "#8AA353",

            cursor: "pointer",
            fontFamily: "Pretendard-Medium",

            fontWeight: "500",
            lineHeight: "1.4925rem",
            position: "relative",
            marginTop: "5.5rem",
            marginLeft: "1.5rem",
          }}
        />
      </DefaultPic>

      <PostContent>
        <RequirementsTable>
          <tbody>
            <tr>
              <td>구분</td>
              <td></td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <InputName placeholder="입력하세요." />
              </td>
            </tr>
            <tr>
              <td>아이디</td>
            </tr>
            <tr>
              <td>이름</td>
            </tr>
            <tr>
              <td>별명</td>
            </tr>
            <tr>
              <td>비밀번호</td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
            </tr>
            <tr>
              <td>생년월일</td>
            </tr>
            <tr>
              <td>전화번호</td>
            </tr>
            <tr>
              <td>이메일</td>
            </tr>
            <tr>
              <td>주소</td>
            </tr>
            <tr>
              <td>소속 센터</td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
            </tr>
            <tr>
              <td>성별</td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>
      <BtnWrapper>
        <RoundWhiteBtn
          text="완료"
          onClick={handlePicClick}
          style={{
            boxSizing: "border-box",
            width: "15.0625rem",
            height: "4.1875rem",

            cursor: "pointer",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.75rem",

            fontWeight: "500",
            border: "0.125rem solid #afbfa5",
            lineHeight: "1.4925rem",
            position: "relative",
          }}
        />
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 0 6rem;
`;

const SubText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 2rem;
  color: #6e6e6e;
  margin-top: 5.9375rem;
  width: 100%;
  display: flex;
  text-align: center;
`;

const DefaultPic = styled.div`
  display: flex;
  align-items: row;
  margin-top: 1.6875rem;
`;

const StyledProfile = styled(ProfileIcon)`
width: 143px
height: 143px`;

const PostContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RequirementsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: 0.8125rem;

  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-align: left;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const InputName = styled.input`
  box-sizing: border-box;
  width: 25.3125rem;
  height: 2.8125rem;
  border: 1.5px solid #8aa353;
  border-radius: 15px;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6e6e6e;

  &::placeholder {
    color: #8aa353;
    font-size: 16px;
  }
`;
