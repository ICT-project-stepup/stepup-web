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
    workPeriod: "1주일",
    workTime: "09:00 ~ 16:00",
    postDate: "2024.05.17",
    postState: "모집 중",
    workNum: "10명",
    roomYN: "가능",
    vehicleYN: "불가",
    workAge: "연령 무관",
    workGender: "성별 무관",
    workType: "고추 수확",
    postDetail:
      "초보자도 쉽게 가능한 일입니다. 작년까지도 초보자분들 많이 지원하시고, 일 배워갔습니다. 많은 관심 부탁드립니다.",
    address: "경남 창녕군 창녕읍 섬마길3 창녕농협창고",
    name: "장복희",
    phoneNum: "010-1234-1234",
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

  const post = postData[0];

  return (
    <Container>
      <PageTitle text="상세글 보기" />
      <PostingWrapper>
        <PostTitle>{post.postTitle}</PostTitle>
        <PostContent>
          <RequirementsTable>
            <tbody>
              <tr>
                <td>지역</td>
                <td>급여</td>
                <td>기간</td>
                <td>날짜</td>
                <td>시간</td>
              </tr>
              <tr>
                <td>{post.area}</td>
                <td>
                  {post.salaryType} {post.salary}
                </td>
                <td>{post.workPeriod}</td>
                <td>{post.postDate}</td>
                <td>{post.workTime}</td>
              </tr>
            </tbody>
          </RequirementsTable>
        </PostContent>
        <SectionTitle>모집요강</SectionTitle>
        <PostContent>
          <RequirementsTable>
            <tbody>
              <tr>
                <td>모집인원</td>
                <td>{post.workNum}</td>
                <td>연령</td>
                {/* 20대 30대 40대 등 복수 선택도 고려해야함 */}
                <td>{post.workAge}</td>
              </tr>
              <tr>
                <td>숙소 제공 여부</td>
                <td>{post.roomYN}</td>
                <td>성별</td>
                <td>{post.workGender}</td>
              </tr>
              <tr>
                <td>차량 지원 여부</td>
                <td>{post.vehicleYN}</td>
                <td>근무 종류</td>
                <td>{post.workType}</td>
              </tr>
            </tbody>
          </RequirementsTable>
        </PostContent>
        <SectionTitle>상세 정보</SectionTitle>
        <PostContent>
          <DetailText>{post.postDetail}</DetailText>
          <Placeholder>(첨부했을 경우,) 첨부한 사진 나오는 칸</Placeholder>
        </PostContent>
        <SectionTitle>근무지 정보</SectionTitle>
        <PostContent>
          <RequirementsTable>
            <tbody>
              <tr>
                <td>주소</td>
                <td>{post.address}</td>
              </tr>
              <tr>
                <td>지도</td>
                <td>
                  <Placeholder>지도 API 추가 예정</Placeholder>
                </td>
              </tr>
            </tbody>
          </RequirementsTable>
        </PostContent>
        <SectionTitle>농가 정보</SectionTitle>
        <PostContent>
          <RequirementsTable>
            <tbody>
              <tr>
                <td>이름</td>
                <td>{post.name}</td>
              </tr>
              <tr>
                <td>연락처</td>
                <td>{post.phoneNum}</td>
              </tr>
            </tbody>
          </RequirementsTable>
        </PostContent>

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
      </PostingWrapper>
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

const RequirementsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

const DetailText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  text-align: left;
  // flex-wrap: wrap;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #999;
  border-radius: 1.875rem;
  margin-top: 2.375rem;
  margin-bottom: 2.375rem;
`;

const PostingWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5.8125rem;
`;

const PostTitle = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
  font-family: Pretendard-SemiBold;
  font-size: 2.25rem;
  color: #8aa353;
  display: flex;
  align-items: flex-start;
`;

const SectionTitle = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 2rem;
  color: #6e6e6e;
  display: flex;
  align-items: flex-start;
  margin-top: 3rem;
  margin-bottom: 1.3125rem;
`;

const PostContent = styled.div`
  width: 100%;
  height: auto;

  border-top: 0.15rem solid #afbfa5;
  border-bottom: 0.15rem solid #afbfa5;
  border-left: none;
  border-right: none;
  // filter: drop-shadow(0.0625rem 0.25rem 0.25rem rgba(175, 191, 165, 0.4));
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoItem = styled.div`
  width: 50%;
  margin-bottom: 0.5rem;
  filter: none;
  font-family: Pretendard-Medium;
  font-size: 1.5rem;
  color: #6e6e6e;

  text-align: left;
  // margin-top: 3rem;
  // display: flex;
  // justify-content: center;
  // text-align: center;
`;
const PostingBtn = styled.div`
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.6875rem 0;
`;
