import React, { useState } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import PlaceHolder from "../../components/PlaceHolder";
import Calendar from "../../components/Calendar";
import CustomSelect from "../../components/CustomSelect";
import ModifyModal from "../../components/modals/ModifyModal.js";

export default function HmlsModifyInfo() {
  const infoData = {
    nickname: "홍길동",
    password: "",
    passwordConfirm: "",
    birthDate: "1990-01-01",
    phoneNumber: "010-1234-5678",
    email: "example@naver.com",
    address: "서울시 강남구",
    center: "서울센터",
    desiredArea: "서울",
  };

  const handlePicClick = () => {
    if (isEditing) {
      document.getElementById("profilePicInput").click();
    }
  };

  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedDate, setSelectedDate] = useState(infoData.birthDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCompleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const emailOptions = [
    { value: "naver.com", label: "naver.com" },
    { value: "hanmail.net", label: "hanmail.net" },
    { value: "nate.com", label: "nate.com" },
    { value: "kakao.com", label: "kakao.com" },
  ];

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      width: "11.875rem",
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

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      handleCompleteClick();
    }
  };

  return (
    <Container>
      <PageTitle text="정보 수정" />
      <SubText>사진</SubText>
      <DefaultPic>
        {profilePic ? (
          <ProfileImage src={profilePic} alt="Profile" />
        ) : (
          <StyledProfile />
        )}
        <input
          id="profilePicInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleProfilePicChange}
        />
        <RoundWhiteBtn
          text="사진 등록"
          onClick={handlePicClick}
          style={{
            boxSizing: "border-box",
            color: isEditing ? "#8AA353" : "#afafaf",
            width: "7.1875rem",
            height: "2.6875rem",
            borderRadius: "0.9375rem",
            cursor: isEditing ? "pointer" : "default",
            fontFamily: "Pretendard-Medium",
            fontWeight: 500,
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
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>이름</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>별명</td>
              <td>
                <PlaceHolder text="별명" defaultValue={infoData.nickname} isEditing={isEditing} />
              </td>
            </tr>
            <tr>
              <td>비밀번호 변경</td>
              <td>
                <PlaceHolder
                  text="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
                  type="password"
                  defaultValue={infoData.password}
                  isEditing={isEditing}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <PlaceHolder text="" type="password" defaultValue={infoData.passwordConfirm} isEditing={isEditing} />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <Calendar
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                  isEditable={isEditing}
                />
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <PlaceHolder
                  text="010"
                  type="text"
                  style={{ width: "6.4375rem" }}
                  defaultValue={infoData.phoneNumber.split("-")[0]}
                  isEditing={isEditing}
                />{" "}
                -{" "}
                <PlaceHolder
                  text="0000"
                  type="text"
                  style={{ width: "6.4375rem" }}
                  defaultValue={infoData.phoneNumber.split("-")[1]}
                  isEditing={isEditing}
                />{" "}
                -{" "}
                <PlaceHolder
                  text="0000"
                  type="text"
                  style={{ width: "6.4375rem" }}
                  defaultValue={infoData.phoneNumber.split("-")[2]}
                  isEditing={isEditing}
                />
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PlaceHolder
                  text="example"
                  type="text"
                  style={{ width: "10.3125rem" }}
                  defaultValue={infoData.email.split("@")[0]}
                  isEditing={isEditing}
                />{" "}
                @{" "}
                <CustomSelect
                  styles={customSelectStyles}
                  options={emailOptions}
                  isDisabled={!isEditing}
                  defaultValue={emailOptions.find(
                    (option) => option.value === infoData.email.split("@")[1]
                  )}
                />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <PlaceHolder text="주소" defaultValue={infoData.address} isEditing={isEditing} />
              </td>
            </tr>
            <tr>
              <td>소속센터</td>
              <td>
                <PlaceHolder text="소속센터" defaultValue={infoData.center} isEditing={isEditing} />
              </td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
              <td>
                <PlaceHolder text="희망 근로 지역" defaultValue={infoData.desiredArea} isEditing={isEditing} />
              </td>
            </tr>
            <tr>
              <td>성별</td>
              <td>버튼추가할거예옹</td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>
      <BtnWrapper>
        <RoundWhiteBtn
          text={isEditing ? "완료" : "수정하기"}
          onClick={handleEditClick}
          style={{
            boxSizing: "border-box",
            width: "15.0625rem",
            height: "4.1875rem",
            cursor: "pointer",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.75rem",
            lineHeight: "1.4925rem",
            position: "relative",
            border: "0.125rem solid #afbfa5",
          }}
        />
      </BtnWrapper>
      <ModifyModal isOpen={isModalOpen} onRequestClose={closeModal} />
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
`;

const StyledProfile = styled(ProfileIcon)`
  width: 8.9375rem;
  height: 8.9375rem;
`;

const DefaultPic = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6875rem;
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
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const ProfileImage = styled.img`
  width: 8.9375rem;
  height: 8.9375rem;
  border-radius: 50%;
  object-fit: cover;
`;
