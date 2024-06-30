import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import PlaceHolder from "../../components/PlaceHolder";
import Calendar from "../../components/Calendar";
import CustomSelect from "../../components/CustomSelect";
import { ReactComponent as RadioOnIcon } from "../../icons/RadioOnIcon.svg";
import { ReactComponent as RadioOffIcon } from "../../icons/RadioOffIcon.svg";
import RoundGreenBtn from "../../components/buttons/RoundGreenBtn";
import { ReactComponent as MustIcon } from "../../icons/MustIcon.svg";
import CompleteModify from "../popup/CompleteModify.js";


export default function HmlsModifyInfo() {
  const [infoData, setInfoData] = useState({
    userType: "구직자",
    name: "",
    userId: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    address: "",
    center: "",
    desiredArea: "",
    gender: "",
  });

  const [profilePic, setProfilePic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateChanged, setIsDateChanged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailDomainChanged, setIsEmailDomainChanged] = useState(false);


  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = window.localStorage.getItem("userId"); // 로컬 스토리지에서 사용자 ID를 불러옴
      if (!userId) {
        console.error("사용자 ID를 찾을 수 없습니다.");
        return;
      }

      try {
        const response = await axios.get(`/api/members/info/${userId}`);
        setInfoData(response.data);

        // 날짜 값이 유효한지 확인합니다.
        const birthDate = new Date(response.data.birthDate);
        if (!isNaN(birthDate.getTime())) {
          setSelectedDate(birthDate);
        }

        setProfilePic(response.data.profileImage);
        setPassword(response.data.password);
        setPasswordConfirm(response.data.passwordConfirm);
      } catch (error) {
        console.error("회원 정보 불러오기 실패:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handlePicClick = () => {
    if (isEditing) {
      document.getElementById("profilePicInput").click();
    }
  };

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateChanged(date !== new Date(infoData.birthDate));
  };

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
    control: (provided, state) => ({
      ...provided,
      width: "11.875rem",
      height: "2.8125rem",
      borderRadius: "15px",
      backgroundColor: "#FFFFFF",
      border:
        state.selectProps.isEditing && state.selectProps.isEmailDomainChanged
          ? "1.5px solid #AFBFA5"
          : "1.5px solid #D9D9D9",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color:
        state.selectProps.isEditing && state.selectProps.isEmailDomainChanged
          ? "#8AA353"
          : "#6e6e6e",
    }),
    menu: (provided) => ({
      ...provided,
      width: "11.875rem",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 190,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleComplete = async () => {
    const userId = window.localStorage.getItem("userId"); // 로컬 스토리지에서 사용자 ID를 불러옴
    if (!userId) {
      console.error("사용자 ID를 찾을 수 없습니다.");
      return;
    }

    const updatedInfo = {
      password,
      passwordConfirm,
      phoneNumber: infoData.phoneNumber,
      email: `${infoData.email.split("@")[0]}@${emailOptions.find(
        (option) => option.value === infoData.email.split("@")[1]
      ).value}`,
      address: infoData.address,
      birth: selectedDate.toISOString().split("T")[0],
      gender: infoData.gender,
      profileImage: profilePic,
      nickname: infoData.nickname,
      favLocation: infoData.desiredArea,
      center: infoData.center,
      passwordMatch: password === passwordConfirm,
    };

    try {
      const response = await axios.put("/api/members/update", updatedInfo);
      if (response.status === 200) {
        handleCompleteClick();
        setIsEditing(false); // 수정 완료 후 수정 모드 해제
      } else {
        console.error("회원 정보 수정 실패:", response.data);
      }
    } catch (error) {
      console.error("회원 정보 수정 실패:", error);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value !== password) {
      setPasswordError("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailDomainChange = (selectedOption) => {
    setIsEmailDomainChanged(selectedOption.value !== infoData.email.split("@")[1]);
  };

  const phoneParts = infoData.phoneNumber.split("-");

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
        {isEditing && (
          <RoundWhiteBtn
            text="사진 등록"
            onClick={handlePicClick}
            style={{
              boxSizing: "border-box",
              color: "#8AA353",
              width: "7.1875rem",
              height: "2.6875rem",
              borderRadius: "0.9375rem",
              cursor: "pointer",
              fontFamily: "Pretendard-Medium",
              fontWeight: 500,
              lineHeight: "1.4925rem",
              position: "relative",
              marginTop: "5.5rem",
              marginLeft: "1.5rem",
            }}
          />
        )}
      </DefaultPic>

      <PostContent>
        <RequirementsTable>
          <tbody>
            <tr>
              <StyledTd isEditing={isEditing}>구분</StyledTd>
              <td
                style={{
                  fontFamily: "Pretendard-Medium",
                  color: "#A9A9A9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    color: isEditing ? "#D9D9D9" : "#A9A9A9",
                  }}
                >
                  {infoData.userType === "구인자" ? (
                    <RadioOnIcon />
                  ) : (
                    <RadioOffIcon />
                  )}
                  <span
                    style={{
                      padding: "0 1.125rem",
                    }}
                  >
                    구인자
                  </span>
                  {infoData.userType === "구직자" ? (
                    <RadioOnIcon />
                  ) : (
                    <RadioOffIcon />
                  )}
                  <span
                    style={{
                      padding: "0 1.125rem",
                    }}
                  >
                    구직자
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <StyledTd isEditing={isEditing}>
                이름 <StyledMustIcon isEditing={isEditing} />
              </StyledTd>
              <td>
                <PlaceHolder
                  text={infoData.name}
                  isEditing={false}
                  readOnly={true}
                  style={{
                    fontSize: "21px",
                    color: isEditing ? "#D9D9D9" : "#6e6e6e",
                  }}
                />
              </td>
            </tr>
            <tr>
              <StyledTd isEditing={isEditing}>
                아이디 <StyledMustIcon isEditing={isEditing} />
              </StyledTd>
              <td>
                <PlaceHolder
                  text={infoData.userId}
                  isEditing={false}
                  readOnly={true}
                  style={{
                    fontSize: "21px",
                    color: isEditing ? "#D9D9D9" : "#6e6e6e",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                별명 <StyledMustIcon />
              </td>
              <td>
                <PlaceHolder
                  text={infoData.nickname}
                  defaultValue={infoData.nickname}
                  isEditing={isEditing}
                  style={{ fontSize: "21px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                비밀번호 변경 <StyledMustIcon />
              </td>
              <td>
                <PlaceHolder
                  text={
                    isEditing
                      ? "영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
                      : ""
                  }
                  type="password"
                  defaultValue={infoData.password}
                  isEditing={isEditing}
                  onChange={handlePasswordChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                비밀번호 확인 <StyledMustIcon />
              </td>
              <td>
                <PlaceHolder
                  text=""
                  type="password"
                  defaultValue={infoData.passwordConfirm}
                  isEditing={isEditing}
                  onChange={handlePasswordConfirmChange}
                />
                {passwordError && <ErrorText>{passwordError}</ErrorText>}
              </td>
            </tr>
            <tr>
              <td>
                생년월일 <StyledMustIcon />
              </td>
              <td>
                <CustomCalendarWrapper
                  isEditing={isEditing}
                  isDateChanged={isDateChanged}
                >
                  <Calendar
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                    isEditing={isEditing}
                    showIcon={false}
                  />
                </CustomCalendarWrapper>
              </td>
            </tr>
            <tr>
              <td>
                전화번호 <StyledMustIcon />
              </td>
              <td>
                <PlaceHolder
                  text={phoneParts[0]}
                  type="text"
                  style={{ width: "6.4375rem", fontSize: "21px" }}
                  defaultValue={phoneParts[0]}
                  isEditing={isEditing}
                />{" "}
                <span style={{ margin: "1.03rem" }}>-</span>
                <PlaceHolder
                  text={phoneParts[1]}
                  type="text"
                  style={{ width: "6.4375rem", fontSize: "21px" }}
                  defaultValue={phoneParts[1]}
                  isEditing={isEditing}
                />{" "}
                <span style={{ margin: "1.03rem" }}>-</span>
                <PlaceHolder
                  text={phoneParts[2]}
                  type="text"
                  style={{ width: "6.4375rem", fontSize: "21px" }}
                  defaultValue={phoneParts[2]}
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
                  text={infoData.email.split("@")[0]}
                  type="text"
                  style={{ width: "10.3125rem", fontSize: "21px" }}
                  defaultValue={infoData.email.split("@")[0]}
                  isEditing={isEditing}
                />{" "}
                <span style={{ margin: "1.03rem" }}>@</span>
                <CustomSelect
                  styles={customSelectStyles}
                  options={emailOptions}
                  isDisabled={!isEditing}
                  defaultValue={emailOptions.find(
                    (option) => option.value === infoData.email.split("@")[1]
                  )}
                  onChange={handleEmailDomainChange}
                  isEditing={isEditing}
                  isEmailDomainChanged={isEmailDomainChanged}
                />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <PlaceHolder
                  text={infoData.address}
                  defaultValue={infoData.address}
                  isEditing={isEditing}
                  style={{ fontSize: "21px" }}
                />
              </td>
            </tr>
            <tr>
              <td>소속센터</td>
              <td>
                <PlaceHolder
                  text={infoData.center}
                  defaultValue={infoData.center}
                  isEditing={isEditing}
                  style={{ fontSize: "21px" }}
                />
              </td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
              <td>
                <PlaceHolder
                  text={infoData.desiredArea}
                  defaultValue={infoData.desiredArea}
                  isEditing={isEditing}
                  style={{ fontSize: "21px" }}
                />
              </td>
            </tr>
            <tr>
              <StyledTd isEditing={isEditing}>성별</StyledTd>
              <td
                style={{
                  display: "flex",
                  alignItems: "row",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <RoundGreenBtn
                    text="남자"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0.9375rem",
                      width: "6.4375rem",
                      height: "2.8125rem",
                      cursor: "default",
                      fontFamily: "Pretendard-Medium",
                      fontSize: "1.3125rem",
                      position: "relative",
                      marginRight: "1.5rem",
                      backgroundColor:
                        infoData.gender === "남" ? "#D9D9D9" : "#FFFFFF",
                      color: infoData.gender === "남" ? "#FFFFFF" : "#D9D9D9",
                      border:
                        infoData.gender === "남"
                          ? "none"
                          : "1.5px solid #D9D9D9",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <RoundGreenBtn
                    text="여자"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0.9375rem",
                      width: "6.4375rem",
                      height: "2.8125rem",
                      cursor: "default",
                      fontFamily: "Pretendard-Medium",
                      fontSize: "1.3125rem",
                      position: "relative",
                      marginRight: "1.5rem",
                      backgroundColor:
                        infoData.gender === "여" ? "#D9D9D9" : "#FFFFFF",
                      color: infoData.gender === "여" ? "#FFFFFF" : "#D9D9D9",
                      border:
                        infoData.gender === "여"
                          ? "none"
                          : "1.5px solid #D9D9D9",
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>
      <BtnWrapper>
        <RoundWhiteBtn
          text={isEditing ? "완료" : "수정하기"}
          onClick={isEditing ? handleComplete : handleEditClick}
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
      <CompleteModify isOpen={isModalOpen} onRequestClose={closeModal} />
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 0 6rem;
  color: #6e6e6e;
  font-family: "Pretendard-Medium";
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
    padding: 0.5rem;
    font-size: 1.3125rem;
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

const StyledMustIcon = styled(MustIcon)`
  margin-bottom: 0.5rem;
  path {
    fill: ${({ isEditing }) => (isEditing ? "#D9D9D9" : "#8aa353")};
  }
`;

const StyledTd = styled.td`
  color: ${({ isEditing }) => (isEditing ? "#D9D9D9" : "#6e6e6e")};
`;

const ErrorText = styled.span`
  color: #d66f6f;
  margin-left: 1rem;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  position: absolute;
  margin-top: 0.7rem;
`;

const CustomCalendarWrapper = styled.div`
  width: 100%;
  max-width: 25.3125rem;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    height: 2.8125rem;
    border: 1.5px solid
      ${({ isEditing, isDateChanged }) =>
        isEditing && isDateChanged ? "#8AA353" : "#D9D9D9"};
    border-radius: 15px;
    max-width: 25.3125rem;
    text-align: left;
    pointer-events: ${({ isEditing }) => (isEditing ? "auto" : "none")};
    color: ${({ isEditing, isDateChanged }) =>
      isEditing && isDateChanged ? "#8AA353" : "#6E6E6E"};
  }
`;
