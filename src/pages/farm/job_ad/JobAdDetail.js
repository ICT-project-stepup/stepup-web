import React from "react";
import { styled } from "styled-components";
import PageTitle from "../../../components/PageTitle";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { ReactComponent as StarIcon } from "../../../icons/StarIcon.svg";
import { ReactComponent as ClipBoardIcon } from "../../../icons/ClipBoardIcon.svg";
import MarkerMap from "../../../components/MarkerMap";

import { useNavigate } from "react-router-dom";

const postData = [
  {
    area: "경남 창녕군",
    postTitle: "마늘 뽑으실 분 구합니다",
    salaryType: "일급",
    salary: "100,000",
    workPeriod: "1주일",
    workTime: "09:00 ~ 16:00",
    post_date: "2024-05-17",
    close_date: "2024-05-25",
    start_date: "2024-06-01",
    end_date: "2024-06-08",
    postState: "모집 중",
    workNum: "10명",
    roomYN: "가능",
    vehicleYN: "불가",
    workAge: "연령 무관",
    workGender: "성별 무관",
    workType: "고추 수확",
    postDetail:
      "초보자도 쉽게 가능한 일입니다. \n작년까지도 초보자분들 많이 지원하시고, 일 배워갔습니다. \n많은 관심 부탁드립니다.",
    address: "경남 창녕군 창녕읍 섬마길3 창녕농협창고",
    name: "장복희",
    phoneNum: "010-1234-1234",
    latitude: 35.514335220719,
    longitude: 128.49032089639,
  },
];

export default function JobAdDetail() {
  // const navigate = useNavigate();

  // const handleApplyClick = () => {
  //   navigate("/manageresume");
  // };

  // const handleInterestClick = () => {
  //   navigate("/interestpost");
  // };

  const post = postData[0];

  return (
    <Container>
      <PageTitle text="상세글 보기" />
      <PostingWrapper>
        <SectionWrapper
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PostTitle>{post.postTitle}</PostTitle>
          <div
            style={{ display: "flex", alignItems: "row", height: "1.625rem" }}
          >
            <div
              style={{
                fontFamily: "Pretendard-SemiBold",
                color: "#8aa353",
                fontSize: "1.375rem",
                width: "4.8125rem",
                height: "1.625rem",
                marginRight: "1rem",
              }}
            >
              모집일자
            </div>
            <div
              style={{
                fontFamily: "Pretendard-Regular",
                color: "#6e6e6e",
                fontSize: "1.375rem",
                width: "16.75rem",
                height: "1.625rem",
              }}
            >
              {post.post_date}~{post.close_date}
            </div>
          </div>
        </SectionWrapper>
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
                <td>
                  {post.start_date}~{post.end_date}
                </td>
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
          {/* <Placeholder>(첨부했을 경우,) 첨부한 사진 나오는 칸</Placeholder> */}
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
                  <MarkerMap post={post} />
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
            // onClick={handleApplyClick}
            style={BtnStyle}
          />
          <div
            style={{
              marginRight: "7.75rem",
            }}
          />
          <RoundWhiteBtn
            text="저장하기"
            icon={<StarIcon />}
            // onClick={handleInterestClick}
            style={BtnStyle}
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

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 3rem;
`;

const RequirementsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    padding: 0.8rem;
    font-size: 1.5rem;
  }
`;

const DetailText = styled.p`
  font-size: 1.5rem;
  // margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
`;

const PostingWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.4375rem;
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
  box-shadow: 0 0.09375rem rgba(175, 191, 165, 0.4);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const BtnStyle = {
  width: "15.0625rem",
  height: "7.3125rem",
  border: "0.125rem solid #8AA353",
  fontFamily: "Pretendard-SemiBold",
  fontSize: "1.75rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};
