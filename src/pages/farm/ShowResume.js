import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import { ReactComponent as YesIcon } from "../../icons/YesIcon.svg";
import { ReactComponent as NoIcon } from "../../icons/NoIcon.svg";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShowResume() {
  const { applicantId, boardNumber } = useParams();
  const [profileData, setProfileData] = useState({});
  const [careerData, setCareerData] = useState([]);
  const [introduction, setIntroduction] = useState("");
  const [applyWithData, setApplyWithData] = useState([]);
  const [id, setId] = useState(0);
  const [isPass, setIsPass] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const navigate = useNavigate();

  /* 이력서 데이터 로드 */
  useEffect(() => {
    axios
      .get(`/api/resume/${applicantId}`)
      .then((response) => {
        const { profile, careers, introduction, applyWiths } = response.data;
        console.log("API 응답 데이터:", response.data);
        setProfileData(profile || {});
        setCareerData(careers || []);
        setIntroduction(introduction ? introduction.content : "");
        setApplyWithData(applyWiths || []);
        fetchUserData(applicantId);
      })
      .catch((error) => {
        console.error("이력서 데이터를 불러오는데 실패했습니다.", error);
      });
  }, [applicantId]);

  /* String 유저 아이디 바탕으로 int 유저 아이디 추출 */
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.post('/api/members/find-id', { userId }, {
        headers: { "Content-Type": 'application/json' }
      });
      if (response.status === 200) {
        const { id } = response.data;
        setId(id);
      }
    } catch (error) {
      console.error("유저 데이터 요청 오류:", error);
    }
  };

  /* 탈락 또는 합격 여부 선정 */
  const handlePassStateChange = (userId, boardNumber, passState) => {
    axios.post(`/api/applicant/pass?userId=${userId}&boardNumber=${boardNumber}&passState=${passState}`)
      .then(response => {
        console.log('Pass state updated successfully');
        if (passState) {
          alert("지원자 합격 처리가 완료되었습니다.\n이력서의 연락처로 합격 여부를 전달해주세요.");
        } else {
          alert("지원자 불합격 처리가 완료되었습니다.");
        }
        navigate(`/showapplicant/${boardNumber}`);
      })
      .catch(error => {
        console.error('Error updating pass state:', error);
      });
      if (passState) {  // 합격 여부 저장
        setIsPass(true);
        setIsFail(false);
      } else {
        setIsPass(false);
        setIsFail(true);
      }
  };

  const profileInfoLabel = [
    { label: "이름", value: profileData.name },
    { label: "나이", value: `${profileData.age}세` },
    { label: "전화번호", value: profileData.phoneNumber },
    { label: "이메일", value: profileData.email },
    { label: "주소", value: profileData.address },
    { label: "성별", value: profileData.gender },
  ];

  const careerLabel = [
    { label: "기관", key: "careerName", className: "institution" },
    { label: "업무", key: "careerType", className: "work" },
    { label: "근무 기간", key: "careerPeriod", className: "period" },
    { label: "입사연월", key: "joinDate", className: "startDate" },
    { label: "퇴사연월", key: "resignDate", className: "endDate" },
  ];

  const applyWithLabel = [
    { label: "번호", key: "number", className: "number" },
    { label: "아이디", key: "id", className: "id" },
    { label: "이름", key: "name", className: "name" },
  ];

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
          {careerData.map((career, index) => (
            <ItemWrapper key={index}>
              <ListItem>
                <Row>
                  <div className="institution">{career.careerName}</div>
                  <div className="work">{career.careerType}</div>
                  <div className="period">{career.careerPeriod}</div>
                  <div className="startDate">{new Date(career.joinDate).toLocaleDateString()}</div>
                  <div className="endDate">{new Date(career.resignDate).toLocaleDateString()}</div>
                </Row>
              </ListItem>
            </ItemWrapper>
          ))}
        </ListWrapper>
      </CareerBox>

      <SubText>자기소개</SubText>
      <SelfIntroBox>{introduction}</SelfIntroBox>

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
          onClick={() => handlePassStateChange(id, boardNumber, false)}
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
          onClick={() => handlePassStateChange(id, boardNumber, true)}
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
