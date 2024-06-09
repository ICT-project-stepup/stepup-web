import React from "react";
import { styled } from "styled-components";
import PageTitle from "../../../components/PageTitle";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { ReactComponent as StarIcon } from "../../../icons/StarIcon.svg";
import { ReactComponent as ClipBoardIcon } from "../../../icons/ClipBoardIcon.svg";

import { useNavigate } from "react-router-dom";

const postData = [
  {
    area: "경남 창녕군",
    postTitle: "마늘 뽑으실 분 구합니다",
    salaryType: "일급",
    salary: "100,000",
    workTime: "09:00 ~ 16:00",
    postDate: "2024.05.17",
    postState: "모집 중",
  },
];

export default function JobAdDetail() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/manageresume");
  };

  const handleInterestClick = () => {
    navigate("/interestpost");
  };

  return (
    <Container>
      <PageTitle text="상세글 보기" />
      <PostTitle>{postData.postTitle}</PostTitle>
      <BasicInfo>
        <InfoItem>
          <strong>지역:</strong> {postData.area}
        </InfoItem>
        <InfoItem>
          <strong>급여:</strong> {postData.salaryType} {postData.salary}
        </InfoItem>
        <InfoItem>
          <strong>기간:</strong> 1주일
        </InfoItem>{" "}
        {/* 임시로 기간을 1주일로 설정 */}
        <InfoItem>
          <strong>날짜:</strong> {postData.postDate}
        </InfoItem>
        <InfoItem>
          <strong>시간:</strong> {postData.workTime}
        </InfoItem>
      </BasicInfo>
      <RecruitmentRequirements>
        <SectionTitle>모집요강</SectionTitle>
        <RequirementsTable>
          <tbody>
            <tr>
              <td>모집인원</td>
              <td>10명</td>
              <td>연령</td>
              <td>연령 무관</td>
            </tr>
            <tr>
              <td>숙소 제공 여부</td>
              <td>가능</td>
              <td>성별</td>
              <td>성별 무관</td>
            </tr>
            <tr>
              <td>차량 지원 여부</td>
              <td>불가</td>
              <td>근무 종류</td>
              <td>고추 수확</td>
            </tr>
          </tbody>
        </RequirementsTable>
      </RecruitmentRequirements>
      <Details>
        <SectionTitle>상세 정보</SectionTitle>
        <DetailText>
          초보자도 쉽게 가능한 일입니다.
          <br />
          작업까지도 초보자분들도 많이 지원하시고, 일 배우겠습니다.
          <br />
          많은 관심 부탁드립니다.
        </DetailText>
        <PlaceholderImage>
          (첨부했을 경우,) 첨부한 사진 나오는 칸
        </PlaceholderImage>
      </Details>
      <WorkplaceInfo>
        <SectionTitle>근무지 정보</SectionTitle>
        <Address>{postData.area} 창녕농협창고</Address>
        <MapPlaceholder>지도 API 추가 예정</MapPlaceholder>
      </WorkplaceInfo>
      <FarmerInfo>
        <SectionTitle>농가 정보</SectionTitle>
        <InfoItem>
          <strong>이름:</strong> 장복희
        </InfoItem>
        <InfoItem>
          <strong>연락처:</strong> 010-1234-1234
        </InfoItem>
      </FarmerInfo>

      <PostingBtn>
        <RoundWhiteBtn
          text="지원하기"
          icon={<ClipBoardIcon />}
          onClick={handleApplyClick}
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
          text="저장하기"
          icon={<StarIcon />}
          onClick={handleInterestClick}
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
      </PostingBtn>
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

const PostTitle = styled.h2`
  font-size: 2rem;
  color: #5a9e48;
  margin-bottom: 10rem;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  width: 50%;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const RecruitmentRequirements = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const RequirementsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
`;

const Details = styled.div`
  margin-bottom: 2rem;
`;

const DetailText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #999;
`;

const WorkplaceInfo = styled.div`
  margin-bottom: 2rem;
`;

const Address = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #999;
`;

const FarmerInfo = styled.div`
  margin-bottom: 2rem;
`;

const PostingBtn = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
