import React from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import { ReactComponent as YesIcon } from "../../icons/YesIcon.svg";
import { ReactComponent as NoIcon } from "../../icons/NoIcon.svg";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";

/* 예은 */
export default function ShowResume() {
  const handleNoClick = () => {};

  const handleYesClick = () => {};

  const profileData = {
    name: "이공주",
    age: "61세",
    phone: "010-1964-0711",
    email: "lookat@naver.com",
    address: "서울 용산구 한강대로92길 6 갈월동빌딩",
    gender: "여자",
  };
  const profileInfoLabel = [
    { label: "이름", value: profileData.name },
    { label: "나이", value: profileData.age },
    { label: "전화번호", value: profileData.phone },
    { label: "이메일", value: profileData.email },
    { label: "주소", value: profileData.address },
    { label: "성별", value: profileData.gender },
  ];

  const careerData = [
    {
      institution: "개인 농가",
      work: "모종 심기",
      period: "1 개월",
      startDate: "2024.04.06",
      endDate: "2024.05.06",
    },
    {
      // 추가 경력
      institution: "흥부 농가",
      work: "모내기",
      period: "2 개월",
      startDate: "2023.03.01",
      endDate: "2023.04.30",
    },
  ];
  const careerLabel = [
    {
      label: "기관",
      key: "institution",
      className: "institution",
    },
    { label: "업무", key: "work", className: "work" },
    {
      label: "근무 기간",
      key: "period",
      className: "period",
    },
    {
      label: "입사연월",
      key: "startDate",
      className: "startDate",
    },
    {
      label: "퇴사연월",
      key: "endDate",
      className: "endDate",
    },
  ];

  const applyWithData = [{ number: "1", id: "qkr1212", name: "박중화" }];
  const applyWithLabel = [
    { label: "번호", key: "number", className: "number" },
    { label: "아이디", key: "id", className: "id" },
    { label: "이름", key: "name", className: "name" },
  ];

  const selfIntroData = {
    introduction: "응 안녕, 룩앳미 룩앳미",
  };

  return (
    <Container>
      <PageTitle text="이력서 보기" style={{ position: "relative" }} />
      <SubText>기본 정보</SubText>
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
      </InformBox>

      <SubText>경력</SubText>
      <CareerBox>
        <ListWrapper>
          <ListHeader>
            {careerLabel.map((header, index) => (
              <span key={index} className={header.className}>
                {header.label}
              </span>
            ))}
          </ListHeader>
          {careerData.map(
            (
              career,
              index // 여러 경력 반복 렌더링
            ) => (
              <ItemWrapper key={index}>
                <ListItem>
                  <Row>
                    <div className="institution">{career.institution}</div>
                    <div className="work">{career.work}</div>
                    <div className="period">{career.period}</div>
                    <div className="startDate">{career.startDate}</div>
                    <div className="endDate">{career.endDate}</div>
                  </Row>
                </ListItem>
              </ItemWrapper>
            )
          )}
        </ListWrapper>
      </CareerBox>

      <SubText>자기소개</SubText>
      <SelfIntroBox>{selfIntroData.introduction}</SelfIntroBox>

      <SubText>같이 지원하기</SubText>
      <ApplyWithBox>
        <ListWrapper>
          <ListHeader>
            {applyWithLabel.map((header, index) => (
              <span key={index} className={header.className}>
                {header.label}
              </span>
            ))}
          </ListHeader>
          {applyWithData.map((applyWith, index) => (
            <ItemWrapper key={index}>
              <ListItem>
                <Row>
                  <div className="number">{applyWith.number}</div>
                  <div className="id">{applyWith.id}</div>
                  <div className="name">{applyWith.name}</div>
                </Row>
              </ListItem>
            </ItemWrapper>
          ))}
        </ListWrapper>
      </ApplyWithBox>

      <CheckBtn>
        <RoundWhiteBtn
          text="탈락시키기"
          icon={<NoIcon />}
          onClick={handleNoClick}
          style={{
            width: "15.0625rem",
            height: "7.3125rem",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.75rem",
            border: "0.125rem solid #8AA353",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "7.75rem",
            position: "relative",
          }}
        />
        <RoundWhiteBtn
          text="합격시키기"
          icon={<YesIcon />}
          onClick={handleYesClick}
          style={{
            width: "15.0625rem",
            height: "7.3125rem",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.75rem",
            border: "0.125rem solid #8AA353",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        />
      </CheckBtn>
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

const SubText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 2rem;
  color: #6e6e6e;
  margin-top: 3.375rem;
  width: 100%;
  display: flex;
  text-align: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
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
  height: 23.375rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  box-shadow: 0 0.25rem 0.25rem rgba(175, 191, 165, 0.4);
  margin-bottom: 2rem;
  flex-direction: column;
  margin-top: 1.6875rem;
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
  margin-bottom: 1.5rem;
`;

const InfoLabel = styled.div`
  width: 7.5rem;
  font-family: "Pretendard-Medium";
  font-size: 1.5rem;
  line-height: 1.8125rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
`;

const InfoValue = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: #8aa353;
  display: flex;
  align-items: center;
`;

const CareerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  border-top: solid 0.125rem #2b2b2b;
  margin-top: 1.6875rem;
  box-sizing: border-box;
`;

const ListHeader = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  border-bottom: solid 0.0625rem #2b2b2b;
  box-sizing: border-box;
  justify-content: space-between;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .id,
  .name {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 1rem;
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  border-bottom: solid 0.0625rem #6e6e6e;
`;

const ListItem = styled.div`
  width: 100%;
  height: 4.2rem;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Medium";
  font-size: 1.25rem;
  color: #2b2b2b;
  box-sizing: border-box;

  .institution,
  .startDate,
  .endDate,
  .period,
  .work,
  .number,
  .id,
  .name {
    flex: 1; /* Flex 속성 사용 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
  }
`;

const SelfIntroBox = styled.div`
  width: auto;
  min-height: 10rem; // 최소 높이 지정
  height: auto; // 유동적인 높이 지정
  margin-top: 1.6875rem;
  background: #e4ecd1;
  box-sizing: border-box;
  border-radius: 1.25rem;
  padding: 1.625rem 2.625rem;
  font-family: "Pretendard-Medium";
  font-size: 1.375rem;
  color: #6e6e6e;
  display: flex;
  white-space: pre-wrap; // 줄 바꿈을 유지
`;

const ApplyWithBox = styled.div`
  width: 60%;
  max-width: 54.375rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CheckBtn = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.6875rem 0;
`;
