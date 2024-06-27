import { useState, useEffect } from "react";
import { styled } from "styled-components";
import PageTitle from "../../../components/PageTitle";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";
import { ReactComponent as StarIcon } from "../../../icons/StarIcon.svg";
import { ReactComponent as ClipBoardIcon } from "../../../icons/ClipBoardIcon.svg";
import MarkerMap from "../../../components/MarkerMap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function JobAdDetail() {
  // const navigate = useNavigate();

  // const handleApplyClick = () => {
  //   navigate("/manageresume");
  // };

  // const handleInterestClick = () => {
  //   navigate("/interestpost");
  // };

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 오류 상태

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/jobad/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job ad');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };
    fetchPost();
  }, [id]);

  /* 페이지 로딩 상태 관리 */
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!post) {
    return <div>No post found</div>;
  }

  /* 날짜 형식 변환 */
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }

    return `${year}.${month}.${day}`;
};

  /* 차량 또는 숙소 제공 여부 */
  const formatAvailability = (availability) => {
    return availability ? "가능" : "불가";
  };


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
                <td>{post.period}</td>
                <td>{formatDate(post.startDate)} ~ {formatDate(post.endDate)}</td>
                <td>{post.startTime} ~ {post.endTime}</td>
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
                <td>{post.recruitsNum}</td>
                <td>연령</td>
                {/* 20대 30대 40대 등 복수 선택도 고려해야함 */}
                <td>{post.recruitsAge}</td>
              </tr>
              <tr>
                <td>숙소 제공 여부</td>
                <td>{formatAvailability(post.roomsYn)}</td>
                <td>성별</td>
                <td>{post.recruitsGender}</td>
              </tr>
              <tr>
                <td>차량 지원 여부</td>
                <td>{formatAvailability(post.vehiclesYn)}</td>
                <td>근무 종류</td>
                <td>{post.workType}</td>
              </tr>
            </tbody>
          </RequirementsTable>
        </PostContent>
        <SectionTitle>상세 정보</SectionTitle>
        <PostContent>
          <DetailText>{post.content}</DetailText>
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
                <td>{post.userName}</td>
              </tr>
              <tr>
                <td>연락처</td>
                <td>{post.userPhone}</td>
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
  white-space: pre-line;
  line-height: 2.3;
  padding-left: 3.5rem;
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
