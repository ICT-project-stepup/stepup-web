import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";
import { ReactComponent as MustIcon } from "../../../icons/MustIcon.svg";

import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";
import PlaceHolder from "../../../components/PlaceHolder";
import Calendar from "../../../components/Calendar";
import CustomSelect from "../../../components/CustomSelect";

/* 예은 */
export default function HmlsSignIn() {
  const navigate = useNavigate();

  const handlePicClick = () => {
    navigate("/manageresume");
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const emailOptions = [
    // 이메일 옵션
    { value: "naver.com", label: "naver.com" },
    { value: "hanmail.net", label: "hanmail.net" },
    { value: "nate.com", label: "nate.com" },
    { value: "kakao.com", label: "kakao.com" },
  ];

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      width: "11.875rem", // 너비 설정
      borderRadius: "15px",
    }),

    menu: (provided) => ({
      ...provided,
      width: "11.875rem",
    }),

    menuList: (provided) => ({
      ...provided,
      maxHeight: 190,
    }),
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
              <td>
                이름
                <StyledMustIcon />
              </td>
              <td>
                <PlaceHolder
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>
                <PlaceHolder
                  text="영문 소문자/숫자, 4~16자"
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>별명</td>
              <td>
                <PlaceHolder
                  style={{
                    border: "0.1rem solid #AFBFA5",
                    color: "#8AA353",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <PlaceHolder
                  text="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <PlaceHolder
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <Calendar
                  style={{ width: "25.3125rem" }}
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <PlaceHolder style={{ width: "6.4375rem" }} />
                <span
                  style={{
                    fontFamily: "Pretendard-Medium",
                    fontSize: "1.375rem",
                    color: "#6E6E6E",
                    padding: "0 1.1875rem",
                  }}
                >
                  -
                </span>
                <PlaceHolder style={{ width: "6.4375rem" }} />
                <span
                  style={{
                    fontFamily: "Pretendard-Medium",
                    fontSize: "1.375rem",
                    color: "#6E6E6E",
                    padding: "0 1.1875rem",
                  }}
                >
                  -
                </span>
                <PlaceHolder style={{ width: "6.4375rem" }} />
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "row",
                }}
              >
                <PlaceHolder style={{ width: "10.3125rem" }} />
                <span
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "1.375rem",
                    color: "#6E6E6E",
                    padding: "0 0.9375rem",
                  }}
                >
                  @
                </span>
                <CustomSelect
                  styles={customSelectStyles}
                  options={emailOptions}
                />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <PlaceHolder
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>소속 센터</td>
              <td>
                <PlaceHolder
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
              <td>
                <PlaceHolder
                  style={{ border: "0.1rem solid #AFBFA5", color: "#8AA353" }}
                />
              </td>
            </tr>
            <tr>
              <td>성별</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "row",
                }}
              >
                <RoundWhiteBtn
                  text="남자"
                  onClick={handlePicClick}
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "0.9375rem",
                    width: "6.4375rem",
                    height: "2.8125rem",
                    cursor: "pointer",
                    fontFamily: "Pretendard-Medium",
                    fontSize: "1.3125rem",
                    position: "relative",
                    marginRight: "1.5rem",
                  }}
                />
                <RoundWhiteBtn
                  text="여자"
                  onClick={handlePicClick}
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "0.9375rem",
                    width: "6.4375rem",
                    height: "2.8125rem",
                    cursor: "pointer",
                    fontFamily: "Pretendard-Medium",
                    fontSize: "1.3125rem",
                    position: "relative",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>
      <BtnWrapper>
        <RoundWhiteBtn
          text="여자"
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

const StyledMustIcon = styled(MustIcon)`
  margin-bottom: 0.5rem;
`;

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
  font-family: "Pretendard-Medium";
  color: #6e6e6e;

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
