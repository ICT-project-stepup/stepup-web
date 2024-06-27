import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../../icons/ProfileIcon.svg";
import { ReactComponent as MustIcon } from "../../../icons/MustIcon.svg";
import { ReactComponent as RadioOnIcon } from "../../../icons/RadioOnIcon.svg";
import { ReactComponent as RadioOffIcon } from "../../../icons/RadioOffIcon.svg";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";
import PlaceHolder from "../../../components/PlaceHolder2";
import Calendar from "../../../components/Calendar";
import CustomSelect from "../../../components/CustomSelect";
import AddressInput from "../../../components/input/address";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* 예은 */
export default function HmlsSignIn() {
  const formSchema = yup
    .object({
      userName: yup.string().required("이름을 입력해주세요"),
      userId: yup
        .string()
        .required("아이디를 입력해주세요")
        .matches(
          /^[a-z0-9]{4,16}$/,
          "영문 소문자/숫자, 4~16자로 입력해 주세요."
        )
        .min(4, "아이디는 최소 4자 이상이어야 합니다")
        .max(16, "아이디는 최대 16자까지 가능합니다"),
      nickname: yup.string().required("별명을 입력해주세요"),
      password: yup
        .string()
        .required("비밀번호를 입력해주세요")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
          "영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~16자로 입력해 주세요."
        )
        .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
        .max(16, "비밀번호는 최대 16자까지 가능합니다"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
        .required("비밀번호 확인을 입력해주세요"),
      birthdate: yup.string().required("생년월일을 선택해주세요"),
      phoneNumber1: yup
        .string()
        .required("전화번호를 입력해주세요")
        .matches(/^[0-9]{3}$/, "전화번호 형식이 올바르지 않습니다"),
      phoneNumber2: yup
        .string()
        .required("전화번호를 입력해주세요")
        .matches(/^[0-9]{4}$/, "전화번호 형식이 올바르지 않습니다"),
      phoneNumber3: yup
        .string()
        .required("전화번호를 입력해주세요")
        .matches(/^[0-9]{4}$/, "전화번호 형식이 올바르지 않습니다"),
      email: yup.string().nullable(),
      emailOption: yup.string().nullable(),
      address: yup.string().nullable(),
      center: yup.string().nullable(),
      desiredArea: yup.string().nullable(),
      gender: yup.string().nullable(),
    })

    .test("phoneNumber", "전화번호 형식이 올바르지 않습니다", (value) => {
      const { phoneNumber1, phoneNumber2, phoneNumber3 } = value;
      return (
        /^[0-9]{3}$/.test(phoneNumber1) &&
        /^[0-9]{4}$/.test(phoneNumber2) &&
        /^[0-9]{4}$/.test(phoneNumber3)
      );
    });

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/signinwelcome");
  };

  const navigate = useNavigate();

  const handlePicClick = () => {
    document.getElementById("profilePicInput").click();
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

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toISOString().slice(0, 10) : null; // date 형식을 yyyy-mm-dd로 변경
    setValue("birthdate", formattedDate);
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
      height: "2.8125rem",
      border: "0.1rem solid #afbfa5",
      borderRadius: "0.9375rem",
      fontSize: "1.3125rem",
    }),

    menu: (provided) => ({
      ...provided,
      width: "11.875rem",
    }),

    menuList: (provided) => ({
      ...provided,
      maxHeight: 190,
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#8aa353",
    }),
  };

  const [selectedGender, setSelectedGender] = useState(null);

  const toggleGender = (gender) => {
    const newGender = selectedGender === gender ? null : gender;
    setSelectedGender(newGender);
    setValue("gender", newGender);
  };

  return (
    <Container>
      <PageTitle text="회원가입" />
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
              <td
                style={{
                  fontFamily: "Pretendard-Medium",
                  color: "#A9A9A9",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <RadioOffIcon />
                  <span
                    style={{
                      padding: "0 1.125rem",
                    }}
                  >
                    구인자
                  </span>
                  <RadioOnIcon />
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
              <td>
                이름
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="userName"
                  name="userName"
                  {...register("userName")}
                />
                {errors.userName && (
                  <ErrorMessage>{errors.userName.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                아이디
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="userId"
                  name="userId"
                  {...register("userId")}
                  maxLength={16}
                  placeholder="영문 소문자/숫자, 4~16자"
                />
                {errors.userId && (
                  <ErrorMessage>{errors.userId.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                별명
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="nickname"
                  name="nickname"
                  {...register("nickname")}
                />
                {errors.nickname && (
                  <ErrorMessage>{errors.nickname.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                비밀번호
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="password"
                  name="password"
                  placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~16자"
                  maxLength={16}
                  {...register("password")}
                />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                비밀번호 확인
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="password"
                  name="confirmPassword"
                  maxLength={16}
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                생년월일
                <StyledMustIcon />
              </td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <Controller
                  name="birthdate"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <CustomCalendarWrapper>
                      <Calendar
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                      />
                    </CustomCalendarWrapper>
                  )}
                />
                {errors.birthdate && (
                  <ErrorMessage>{errors.birthdate.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td>
                전화번호
                <StyledMustIcon />
              </td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PlaceHolder
                  type="tel"
                  name="phoneNumber1"
                  {...register("phoneNumber1")}
                  maxLength={3}
                  style={{
                    width: "6.4375rem",
                  }}
                />
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
                <PlaceHolder
                  type="tel"
                  name="phoneNumber2"
                  {...register("phoneNumber2")}
                  maxLength={4}
                  style={{
                    width: "6.4375rem",
                  }}
                />
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
                <PlaceHolder
                  type="tel"
                  name="phoneNumber3"
                  {...register("phoneNumber3")}
                  maxLength={4}
                  style={{
                    width: "6.4375rem",
                  }}
                />
                {errors.phoneNumber1 ||
                errors.phoneNumber2 ||
                errors.phoneNumber3 ? (
                  <ErrorMessage>
                    {errors.phoneNumber1?.message ||
                      errors.phoneNumber2?.message ||
                      errors.phoneNumber3?.message}
                  </ErrorMessage>
                ) : null}
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td style={{ display: "flex", alignItems: "row" }}>
                <PlaceHolder
                  type="text"
                  name="email"
                  {...register("email")}
                  style={{ width: "10.3125rem" }}
                />
                <span
                  style={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "1.375rem",
                    color: "#6E6E6E",
                    padding: "0 0.9375rem",
                    margin: "0.5rem 0",
                  }}
                >
                  @
                </span>
                <Controller
                  name="emailOption"
                  control={control}
                  render={({ field }) => (
                    <CustomSelect
                      options={emailOptions}
                      styles={customSelectStyles}
                      placeholder=""
                      onChange={(selectedOption) =>
                        field.onChange(
                          selectedOption ? selectedOption.value : ""
                        )
                      }
                    />
                  )}
                />
                {errors.emailOption && (
                  <ErrorMessage>{errors.emailOption.message}</ErrorMessage>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top", padding: "0.8rem" }}>주소</td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <AddressInput
                      onAddressChange={(address) =>
                        setValue("address", address)
                      }
                    />
                  )}
                />
                <PlaceHolder
                  placeholder="상세 주소 입력"
                  type="text"
                  name="detailedAddress"
                  {...register("detailedAddress")}
                />
              </td>
            </tr>
            <tr>
              <td>소속 센터</td>
              <td style={{ display: "flex", alignItems: "center" }}>
                <PlaceHolder
                  type="center"
                  name="center"
                  {...register("center")}
                />
              </td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
              <td>
                <PlaceHolder
                  type="desiredArea"
                  name="desiredArea"
                  {...register("desiredArea")}
                />
              </td>
            </tr>
            <tr>
              <td>성별</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <GenderButton
                  type="button"
                  onClick={() => toggleGender("male")}
                  selected={selectedGender === "male"}
                >
                  남성
                </GenderButton>

                <GenderButton
                  type="button"
                  onClick={() => toggleGender("female")}
                  selected={selectedGender === "female"}
                >
                  여성
                </GenderButton>
              </td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>

      <BtnWrapper>
        <RoundWhiteBtn
          text="완료"
          type="submit"
          onClick={handleSubmit(onSubmit)}
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

const ProfileImage = styled.img`
  width: 8.9375rem;
  height: 8.9375rem;
  border-radius: 50%;
  object-fit: cover;
`;

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
  table-layout: fixed; // 테이블 너비 고정

  td {
    padding: 0.8rem;
    font-size: 1.5rem;
    text-align: left;
  }

  td:first-child {
    width: 12.3125rem; // 테이블 왼쪽 칸 너비 설정
    white-space: nowrap;
  }
`;

const ErrorMessage = styled.div`
  color: #d66f6f;
  font-size: 1.25rem;
  margin-left: 1rem;
`;

const GenderButton = styled.button`
  background-color: ${(props) => (props.selected ? "#8AA353" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#6E6E6E")};
  border: ${(props) => (props.selected ? "none" : "1.5px solid  #AFBFA5")};
  box-sizing: border-box;
  border-radius: 0.9375rem;
  width: 6.4375rem;
  height: 2.8125rem;
  cursor: pointer;
  font-family: "Pretendard-Medium";
  font-size: 1.3125rem;
  margin-right: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;
const CustomCalendarWrapper = styled.div`
  width: 100%;
  max-width: 25.3125rem;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    height: 2.8125rem;
    border: 0.1rem solid #afbfa5;
    border-radius: 0.9375rem;
    max-width: 25.3125rem;
    text-align: left;
    color: #8aa353;
    font-size: 1.3125rem;
    outline: none; // focus 시 외곽선 안보이게
    padding: 0 1rem;
  }
`;
