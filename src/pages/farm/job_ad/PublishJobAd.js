import { React, useState } from "react";
import { styled } from "styled-components";
import PageTitle from "../../../components/PageTitle";
import PlaceHolder from "../../../components/PlaceHolder2";
import Calendar from "../../../components/Calendar";
import CustomSelect from "../../../components/CustomSelect";
import AddressInput from "../../../components/input/address";
import Chip from "@mui/material/Chip";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import Tooltip from "@mui/material/Tooltip";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/* 예은 */
export default function PublishJobAd() {
  const navigate = useNavigate();

  const { handleSubmit, control, setValue, watch } = useForm({
    defaultValues: {
      postTitle: "",
      period: "",
      recruitStart: "",
      recruitEnd: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      salaryType: "",
      salary: "",
      recruitsNum: "",
      recruitsAge: [],
      recruitsGender: "",
      roomYn: "",
      vehiclesYn: "",
      workType: "",
      content: "",
      address: "",
      lat: "",
      lng: "",
      userName: "",
      userPhone: "",
    },
  });

  const onSubmit = (data) => {
    let userPhone = "";
    if (data.contact1 && data.contact2 && data.contact3) {
      userPhone = `${data.contact1}${data.contact2}${data.contact3}`;
    }
    let address = "";
    if (data.mainAddress && data.detailedAddress) {
      address = `${data.mainAddress} ${data.detailedAddress}`;
    } else if (data.mainAddress) {
      address = `${data.mainAddress}`;
    }
    console.log(new Date().toISOString());

    const postData = {
      ...data,
      userPhone,
      address,
      recruitStart: formatDateISO(new Date().toISOString()),
      recruitEnd: formatDate(data.recruitEnd),
      startDate: formatDate(data.startDate),
      endDate: formatDate(data.endDate),
      startTime: formatTime(data.startTime),
      endTime: formatTime(data.endTime),
    };
    delete postData.contact1;
    delete postData.contact2;
    delete postData.contact3;
    delete postData.mainAddress;
    delete postData.detailedAddress;

    console.log(postData);

    // 필수 입력 알림
    for (let key in postData) {
      if (
        postData[key] === "" ||
        (Array.isArray(postData[key]) && postData[key].length === 0)
      ) {
        alert("모든 항목을 입력해주세요");
        return;
      }
    }

    console.log(postData);
    navigate("/jobaddetail");
  };

  const handleChipClick = (field, value) => {
    if (value === "anyAge") {
      // <연령 무관> 버튼
      if (watch(field).includes("anyAge")) {
        // 이미 포함된 경우 제거
        setValue(
          field,
          watch(field).filter((item) => item !== "anyAge")
        );
      } else {
        // 포함되지 않은 경우 추가
        setValue(field, ["anyAge"]); // 배열에 <anyAge> 하나만 넣음
      }
    } else {
      // 그 외 다른 연령대 버튼
      const currentValues = watch(field);
      if (currentValues.includes("anyAge")) {
        // <연령 무관> 버튼이 클릭된 상태에서 다른 연령대를 선택한 경우
        setValue(field, [value]); // 선택된 연령대 값으로 배열 재설정
      } else {
        // <연령 무관> 버튼이 클릭되지 않은 경우 및 기본적인 경우
        if (currentValues.includes(value)) {
          setValue(
            field,
            currentValues.filter((item) => item !== value)
          );
        } else {
          setValue(field, [...currentValues, value]);
        }
      }
    }
  };

  const [customWorkType, setCustomWorkType] = useState("");

  const TimeHourOptions = Array.from({ length: 24 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const TimeMinuteOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i * 5,
    label: `${i * 5}`,
  }));

  const NumberOptions = Array.from({ length: 50 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const handleDateChange = (name, date) => {
    setValue(name, date);
  };

  /* 날짜 형식 변환 */
  const formatDateISO = (date) => {
    const formattedDate = date;
    return formattedDate.slice(0, 19);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString); // 주어진 날짜 문자열을 Date 객체로 변환
    const formattedDate = date.toISOString().slice(0, 19); // UTC 형식의 문자열로 변환 후 초단위 까지 자름
    return formattedDate;
  };

  /* 시간 형식 변환 */
  const formatTime = (timeObj) => {
    if (
      !timeObj ||
      typeof timeObj !== "object" ||
      !("hours" in timeObj) ||
      !("minutes" in timeObj)
    ) {
      return "";
    }

    const hours = String(timeObj.hours).padStart(2, "0");
    const minutes = String(timeObj.minutes).padStart(2, "0");

    return `${hours}:${minutes}:00`;
  };

  return (
    <Container>
      <PageTitle text="구인글 쓰기" style={{ position: "relative" }} />
      <SectionWrapper
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <SectionTitle
          style={{
            marginRight: "8.9375rem",
          }}
        >
          제목
        </SectionTitle>
        <Controller
          name="postTitle"
          control={control}
          render={({ field }) => (
            <StyledTitleInput {...field} placeholder="제목을 입력하세요." />
          )}
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>기본 정보</SectionTitle>
        <PostContent>
          <DetailWrapper>
            <DetailTitle>일하는 기간</DetailTitle>
            <SelectWrapper>
              <Controller
                name="period"
                control={control}
                render={({ field }) => (
                  <>
                    <Tooltip
                      title="일하는 기간이 한 달 이내라면, 단기로 클릭!"
                      placement="top"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            background: "#8aa353",
                            color: "#ffffff",
                            fontFamily: "Pretendard-Regular",
                            fontSize: "1rem",
                            boxShadow: "0 0.09375rem rgba(228, 236, 209, 0.4)",
                            borderRadius: "0.6rem",
                          },
                        },
                      }}
                    >
                      <CustomChip
                        label="단기"
                        clickable
                        color={field.value === "단기" ? "primary" : "default"}
                        onClick={() =>
                          field.onChange(field.value === "단기" ? "" : "단기")
                        }
                      />
                    </Tooltip>
                    <Tooltip
                      title="일하는 기간이 한 달 이상이라면, 장기로 클릭!"
                      placement="top"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            background: "#8aa353",
                            color: "#ffffff",
                            fontFamily: "Pretendard-Regular",
                            fontSize: "1rem",
                            boxShadow: "0 0.09375rem rgba(228, 236, 209, 0.4)",
                            borderRadius: "0.6rem",
                          },
                        },
                      }}
                    >
                      <CustomChip
                        label="장기"
                        clickable
                        color={field.value === "장기" ? "primary" : "default"}
                        onClick={() =>
                          field.onChange(field.value === "장기" ? "" : "장기")
                        }
                      />
                    </Tooltip>
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>
          <DetailWrapper style={{ alignItems: "flex-start" }}>
            <DetailTitle>날짜</DetailTitle>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SelectWrapper>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <CustomCalendarWrapper>
                      <Calendar
                        selectedDate={field.value}
                        handleDateChange={(date) =>
                          handleDateChange("startDate", date)
                        }
                      />
                    </CustomCalendarWrapper>
                  )}
                />
                <Subtext>부터</Subtext>
              </SelectWrapper>

              <SelectWrapper style={{ marginTop: "0.625rem" }}>
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                    <CustomCalendarWrapper>
                      <Calendar
                        selectedDate={field.value}
                        dateFormat="yyyy.MM.dd"
                        handleDateChange={(date) =>
                          handleDateChange("endDate", date)
                        }
                      />
                    </CustomCalendarWrapper>
                  )}
                />
                <Subtext>까지</Subtext>
              </SelectWrapper>
            </div>
          </DetailWrapper>
          <DetailWrapper style={{ alignItems: "flex-start" }}>
            <DetailTitle>시간</DetailTitle>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SelectWrapper>
                <Controller
                  name="startTime"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomSelect
                        styles={customSelectStyles}
                        value={TimeHourOptions.find(
                          (option) => option.value === field.value?.hours
                        )}
                        onChange={(selectedOption) =>
                          setValue("startTime", {
                            ...field.value,
                            hours: selectedOption.value,
                          })
                        }
                        options={TimeHourOptions}
                        placeholder=""
                      />
                      <Subtext>시</Subtext>
                    </>
                  )}
                />
                <Controller
                  name="startTime"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomSelect
                        styles={customSelectStyles}
                        value={TimeMinuteOptions.find(
                          (option) => option.value === field.value?.minutes
                        )}
                        onChange={(selectedOption) =>
                          setValue("startTime", {
                            ...field.value,
                            minutes: selectedOption.value,
                          })
                        }
                        options={TimeMinuteOptions}
                        placeholder=""
                      />
                      <Subtext style={{ marginRight: "0rem" }}>분</Subtext>
                      <Subtext>부터</Subtext>
                    </>
                  )}
                />
              </SelectWrapper>
              <SelectWrapper style={{ marginTop: "0.625rem" }}>
                <Controller
                  name="endTime"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomSelect
                        styles={customSelectStyles}
                        value={TimeHourOptions.find(
                          (option) => option.value === field.value?.hours
                        )}
                        onChange={(selectedOption) =>
                          setValue("endTime", {
                            ...field.value,
                            hours: selectedOption.value,
                          })
                        }
                        options={TimeHourOptions}
                        placeholder=""
                      />
                      <Subtext>시</Subtext>
                    </>
                  )}
                />
                <Controller
                  name="endTime"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomSelect
                        styles={customSelectStyles}
                        value={TimeMinuteOptions.find(
                          (option) => option.value === field.value?.minutes
                        )}
                        onChange={(selectedOption) =>
                          setValue("endTime", {
                            ...field.value,
                            minutes: selectedOption.value,
                          })
                        }
                        options={TimeMinuteOptions}
                        placeholder=""
                      />
                      <Subtext style={{ marginRight: "0rem" }}>분</Subtext>
                      <Subtext>까지</Subtext>
                    </>
                  )}
                />
              </SelectWrapper>
            </div>
          </DetailWrapper>
          <DetailWrapper style={{ alignItems: "flex-start" }}>
            <DetailTitle>급여</DetailTitle>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SelectWrapper>
                <Controller
                  name="salaryType"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomChip
                        label="시급"
                        clickable
                        color={field.value === "시급" ? "primary" : "default"}
                        onClick={() =>
                          field.onChange(field.value === "시급" ? "" : "시급")
                        }
                      />
                      <CustomChip
                        label="일급"
                        clickable
                        color={field.value === "일급" ? "primary" : "default"}
                        onClick={() =>
                          field.onChange(field.value === "일급" ? "" : "일급")
                        }
                      />
                      <CustomChip
                        label="건당"
                        clickable
                        color={field.value === "건당" ? "primary" : "default"}
                        onClick={() =>
                          field.onChange(field.value === "건당" ? "" : "건당")
                        }
                      />
                    </>
                  )}
                />
              </SelectWrapper>
              <SelectWrapper style={{ marginTop: "0.625rem" }}>
                <Controller
                  name="salary"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledPlaceHolder {...field} type="tel" />
                    </>
                  )}
                />
                <Subtext>원</Subtext>
              </SelectWrapper>
            </div>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>모집 마감일</DetailTitle>
            <SelectWrapper>
              <Controller
                name="recruitEnd"
                control={control}
                render={({ field }) => (
                  <CustomCalendarWrapper>
                    <Calendar
                      selectedDate={field.value}
                      handleDateChange={(date) =>
                        handleDateChange("recruitEnd", date)
                      }
                    />
                  </CustomCalendarWrapper>
                )}
              />
              <Subtext>까지</Subtext>
            </SelectWrapper>
          </DetailWrapper>
        </PostContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>모집 요강</SectionTitle>
        <PostContent>
          <DetailWrapper>
            <DetailTitle>모집인원</DetailTitle>

            <SelectWrapper>
              <Controller
                name="recruitsNum"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomSelect
                      styles={customSelectStyles}
                      value={NumberOptions.find(
                        (option) => option.value === field.value
                      )}
                      onChange={(selectedOption) =>
                        setValue("recruitsNum", selectedOption.value)
                      }
                      options={NumberOptions}
                      placeholder=""
                    />
                  </>
                )}
              />
              <Subtext>명</Subtext>
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>연령</DetailTitle>
            <SelectWrapper>
              <Controller
                name="recruitsAge"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomChip
                      label="20대"
                      clickable
                      color={
                        watch("recruitsAge").includes("20대")
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick("recruitsAge", "20대")}
                    />

                    <CustomChip
                      label="30대"
                      clickable
                      color={
                        watch("recruitsAge").includes("30대")
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick("recruitsAge", "30대")}
                    />

                    <CustomChip
                      label="40대"
                      clickable
                      color={
                        watch("recruitsAge").includes("40대")
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick("recruitsAge", "40대")}
                    />

                    <CustomChip
                      label="50대"
                      clickable
                      color={
                        watch("recruitsAge").includes("50대")
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick("recruitsAge", "50대")}
                    />

                    <CustomChip
                      label="60대"
                      clickable
                      color={
                        watch("recruitsAge").includes("60대")
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick("recruitsAge", "60대")}
                    />

                    <CustomChip
                      label="70대 이상"
                      clickable
                      color={
                        watch("recruitsAge").includes("70대 이상")
                          ? "primary"
                          : "default"
                      }
                      onClick={() =>
                        handleChipClick("recruitsAge", "70대 이상")
                      }
                      style={{ width: "9.125rem" }}
                    />
                    <CustomChip
                      label="연령 무관"
                      clickable
                      color={
                        field.value === "연령 무관" ? "primary" : "default"
                      }
                      onClick={() =>
                        field.onChange(
                          field.value === "연령 무관" ? "" : "연령 무관"
                        )
                      }
                      style={{ width: "9.125rem" }}
                    />
                  </>
                )}
              />
              <Subtext2>(복수 선택 가능)</Subtext2>
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>성별</DetailTitle>
            <SelectWrapper>
              <Controller
                name="recruitsGender"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomChip
                      label="남자"
                      clickable
                      color={field.value === "남자" ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === "남자" ? "" : "남자")
                      }
                    />
                    <CustomChip
                      label="여자"
                      clickable
                      color={field.value === "여자" ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === "여자" ? "" : "여자")
                      }
                    />
                    <CustomChip
                      label="성별 무관"
                      clickable
                      color={
                        field.value === "성별 무관" ? "primary" : "default"
                      }
                      onClick={() =>
                        field.onChange(
                          field.value === "성별 무관" ? "" : "성별 무관"
                        )
                      }
                      style={{ width: "9.125rem" }}
                    />
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>숙소 제공 여부</DetailTitle>
            <SelectWrapper>
              <Controller
                name="roomYn"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomChip
                      label="가능"
                      clickable
                      color={field.value === true ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === true ? "" : true)
                      }
                    />
                    <CustomChip
                      label="불가"
                      clickable
                      color={field.value === false ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === false ? "" : false)
                      }
                    />
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>차량 제공 여부</DetailTitle>
            <SelectWrapper>
              <Controller
                name="vehiclesYn"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomChip
                      label="가능"
                      clickable
                      color={field.value === true ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === true ? "" : true)
                      }
                    />
                    <CustomChip
                      label="불가"
                      clickable
                      color={field.value === false ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === false ? "" : false)
                      }
                    />
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>근무 종류</DetailTitle>
            <SelectWrapper>
              <Controller
                name="workType"
                control={control}
                render={({ field }) => (
                  <>
                    <CustomChip
                      label="모내기"
                      clickable
                      color={field.value === "모내기" ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === "모내기" ? "" : "모내기")
                      }
                    />
                    <CustomChip
                      label="수확"
                      clickable
                      color={field.value === "수확" ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(field.value === "수확" ? "" : "수확")
                      }
                    />
                    <CustomChip
                      label="집 보수"
                      clickable
                      color={field.value === "집 보수" ? "primary" : "default"}
                      onClick={() =>
                        field.onChange(
                          field.value === "집 보수" ? "" : "집 보수"
                        )
                      }
                    />
                    <StyledPlaceHolder
                      placeholder="직접 입력"
                      value={customWorkType}
                      onFocus={() => setValue("workType", "")} // 직접 입력 시, 기존 선택 값 초기화
                      onChange={(e) => {
                        setCustomWorkType(e.target.value);
                        setValue("workType", e.target.value);
                      }}
                    />
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>
        </PostContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>상세 정보</SectionTitle>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <StyledTextArea {...field} placeholder="상세 설명을 입력하세요." />
          )}
        />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>근무지 정보</SectionTitle>
        <PostContent>
          <DetailWrapper style={{ alignItems: "flex-start" }}>
            <DetailTitle>주소</DetailTitle>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SelectWrapper>
                <AddressInput
                  subBoxStyle={{
                    width: "25.3125rem",
                    height: "3.125rem",
                    fontSize: "1.375rem",
                  }}
                  onAddressChange={(address, coordinates) => {
                    setValue("mainAddress", address);
                    if (coordinates) {
                      setValue("lat", coordinates.lat);
                      setValue("lng", coordinates.lng);
                    }
                  }}
                />
              </SelectWrapper>
              <SelectWrapper>
                <StyledPlaceHolder
                  placeholder="상세 주소 입력"
                  type="text"
                  style={{ width: "25.3125rem" }}
                  onChange={(e) => setValue("detailedAddress", e.target.value)}
                />
              </SelectWrapper>
            </div>
          </DetailWrapper>
        </PostContent>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>공고자 정보</SectionTitle>
        <PostContent>
          <DetailWrapper>
            <DetailTitle>이름</DetailTitle>
            <SelectWrapper>
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledPlaceHolder
                      {...field}
                      type="text"
                      style={{ width: "11.25rem" }}
                    />
                  </>
                )}
              />
            </SelectWrapper>
          </DetailWrapper>

          <DetailWrapper>
            <DetailTitle>연락처</DetailTitle>
            <SelectWrapper>
              <Controller
                name="contact1"
                control={control}
                render={({ field }) => (
                  <StyledPlaceHolder
                    {...field}
                    type="tel"
                    maxLength={3}
                    style={{ width: "6.4375rem" }}
                  />
                )}
              />
              <Subtext>-</Subtext>
              <Controller
                name="contact2"
                control={control}
                render={({ field }) => (
                  <StyledPlaceHolder
                    {...field}
                    type="tel"
                    maxLength={4}
                    style={{ width: "6.4375rem" }}
                  />
                )}
              />
              <Subtext>-</Subtext>
              <Controller
                name="contact3"
                control={control}
                render={({ field }) => (
                  <StyledPlaceHolder
                    {...field}
                    type="tel"
                    maxLength={4}
                    style={{ width: "6.4375rem" }}
                  />
                )}
              />
            </SelectWrapper>
          </DetailWrapper>
        </PostContent>
      </SectionWrapper>

      <BtnWrapper>
        <RoundWhiteBtn
          text="공고하기"
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
  height: auto;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 2rem 6rem;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 3rem;
`;

const SectionTitle = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 2rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
`;

const StyledTitleInput = styled(PlaceHolder)`
  width: 37.5rem;
  height: 3.75rem;
  font-size: 1.6875rem;
  border-radius: 1.25rem;
  padding: 0 1.375rem;

  &::placeholder {
    font-size: 1.375rem;
  }
`;

const StyledPlaceHolder = styled(PlaceHolder)`
  width: 14.375rem;
  height: 3.125rem;
  font-size: 1.375rem;
`;

const PostContent = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
  border-top: 0.09375rem solid #afbfa5;
  border-bottom: 0.09375rem solid #afbfa5;
  box-shadow: 0 0.09375rem rgba(175, 191, 165, 0.4);
  padding: 2.375rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.0625rem;

  &:first-child { // 첫 번째 요소만 margin-top 스타일 제거
    margin-top: 0; 
`;

const DetailTitle = styled.div`
  width: 9.9375rem;
  font-family: Pretendard-Medium;
  font-size: 1.75rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2.5rem;
`;

const CustomChip = styled(Chip)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    marginRight: "1.5rem",
    boxSizing: "border-box",
    borderRadius: "0.9375rem",
    width: "6.4375rem",
    height: "3.125rem",
    fontFamily: "Pretendard-Medium",
    fontSize: "1.375rem",
  },

  "&.MuiChip-filledPrimary": {
    backgroundColor: "#8AA353", // 선택 됐을 때 배경색
    color: "#ffffff", // 선택 됐을 때 글자색
    border: "none",
  },

  "&.MuiChip-filledDefault": {
    backgroundColor: "#ffffff", // 기본 배경색
    color: "#6E6E6E", // 기본 글자색
    border: "0.09375rem solid #AFBFA5", // 기본 외곽선
  },
}));

const Subtext = styled.div`
  font-family: Pretendard-medium;
  font-size: 1.375rem;
  color: #6e6e6e;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Subtext2 = styled.div`
  font-family: Pretendard-Regular;
  font-size: 1.25rem;
  color: #8aa353;
`;

const CustomCalendarWrapper = styled.div`
  width: 17.25rem;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    height: 3.125rem;
    border: 0.09375rem solid #afbfa5;
    border-radius: 0.9375rem;
    max-width: 25.3125rem;
    text-align: left;
    color: #8aa353;
    font-size: 1.375rem;
    outline: none; // focus 시 외곽선 안보이게
    padding: 0 1rem;
  }
`;

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    width: "5.8rem",
    height: "3.125rem",
    border: "0.09375rem solid #AFBFA5",
    borderRadius: "0.9375rem",
    fontSize: "1.375rem",
    lineHeight: "1.625rem",
    color: "#8AA353",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "Pretendard-Medium",
    color: "#8AA353",
  }),
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 25rem;
  resize: none; // 크기 고정

  margin-top: 1.5rem;
  border-top: 0.09375rem solid #afbfa5;
  border-bottom: 0.09375rem solid #afbfa5;
  border-left: none;
  border-right: none;
  box-shadow: 0 0.09375rem rgba(175, 191, 165, 0.4);
  padding: 2.375rem 0;

  font-family: Pretendard-Medium;
  font-size: 1.5rem;
  color: #6e6e6e;

  &::placeholder {
    color: #afbfa5;
    font-size: 1.375rem;
  }

  &:focus {
    outline: none;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;
