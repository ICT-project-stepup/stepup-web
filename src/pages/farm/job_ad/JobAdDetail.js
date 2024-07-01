
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import PageTitle from '../../../components/PageTitle';
import RoundWhiteBtn from '../../../components/buttons/RoundWhiteBtn';
import { ReactComponent as StarIcon } from '../../../icons/StarIcon.svg';
import { ReactComponent as ClipBoardIcon } from '../../../icons/ClipBoardIcon.svg';
import MarkerMap from '../../../components/MarkerMap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function JobAdDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/jobad/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job ad');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleApplyClick = async () => {
    const applicantId = window.localStorage.getItem("id");
    if (applicantId) {
      try {
        const requestData = { applicantId, boardNumber: id };
        console.log("Sending request data:", requestData);
        await axios.post('/api/applicant', requestData);
        alert("지원이 완료되었습니다.");
      } catch (error) {
        console.error('There was an error applying!', error);
        console.error('Error response:', error.response);
      }
    } else {
      console.error('Applicant ID is not found in localStorage');
    }
  };

  const handleInterestClick = () => {
    navigate("/interestpost");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!post) {
    return <div>No post found</div>;
  }

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

  const formatAvailability = (availability) => {
    return availability ? "가능" : "불가";
  };

  return (
    <Container>
      <PageTitle text="상세글 보기" />
      <PostingWrapper>
        <SectionWrapper style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <PostTitle>{post.postTitle}</PostTitle>
          <div style={{ display: "flex", alignItems: "row", height: "1.625rem" }}>
            <div style={{ fontFamily: "Pretendard-SemiBold", color: "#8aa353", fontSize: "1.375rem", width: "4.8125rem", height: "1.625rem", marginRight: "1rem" }}>
              모집일자
            </div>
            <div style={{ fontFamily: "Pretendard-Regular", color: "#6e6e6e", fontSize: "1.375rem", width: "16.75rem", height: "1.625rem" }}>
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
                <td>{post.salaryType} {post.salary}</td>
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
                <td><MarkerMap post={post} /></td>
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
            onClick={handleApplyClick}
            style={BtnStyle}
          />
          <div style={{ marginRight: "7.75rem" }} />
          <RoundWhiteBtn
            text="저장하기"
            icon={<StarIcon />}
            onClick={handleInterestClick}
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
  AlignItems: "center",
  justifyContent: "center",
  position: "relative",
};
