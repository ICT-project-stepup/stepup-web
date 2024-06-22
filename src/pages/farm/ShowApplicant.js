import { React, useState } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import CustomPagination from "../../components/CustomPagination";
import MyApplicant from "../../components/farm/MyApplicant";

const applicantData = [
  {
    applicantArea: "서울",
    applicantName: "복귀주",
    applicantAge: "31",
    applicantGender: "남자",
    applicantDate: "2024.05.16",
  },
  {
    applicantArea: "경기 수원시",
    applicantName: "송삼동",
    applicantAge: "43",
    applicantGender: "남자",
    applicantDate: "2024.05.14",
  },
];

/* 예은 */
export default function ShowApplicant() {
  const [activePage, setActivePage] = useState(1);

  /* 페이지네이션에 필요한 변수들 */
  const totalItemsCount = applicantData.length;
  const indexOfLastPost = activePage * 7;
  const indexOfFirstPost = indexOfLastPost - 7;
  const currentPosts = applicantData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const currentStatusPosts = currentPosts.filter((post) =>
    applicantData.includes(post)
  );

  return (
    <Container>
      <PageTitle text="지원자 정보" style={{ position: "relative" }} />
      <CountWrapper>
        <span>총 {totalItemsCount}건</span>
      </CountWrapper>
      <ListWrapper>
        <ListTitle>
          <span className="area">지역</span>
          <span className="name">이름</span>
          <span className="age">나이</span>
          <span className="gender">성별</span>
          <span className="applyDate">지원일</span>
          <span className="resume" />
        </ListTitle>
        {currentStatusPosts.map((applicantData, index) => (
          <MyApplicant key={index} applicantData={applicantData} />
        ))}
        <CustomPagination
          activePage={activePage}
          totalItemsCount={totalItemsCount}
          handlePageChange={handlePageChange}
        />
      </ListWrapper>
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

const CountWrapper = styled.div`
  width: 100%;
  height: 1.625rem;
  font-family: "Pretendard-Regular";
  font-size: 1.375rem;
  color: #6e6e6e;
  display: flex;
  align-items: center;
  margin-top: 2.125rem;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: block;
  border-top: solid 0.125rem #2b2b2b;
  margin-top: 1.6875rem;
`;

const ListTitle = styled.div`
  border-bottom: solid 0.0625rem #2b2b2b;
  margin-top: 1rem;
  padding-bottom: 1rem; /* 아래쪽에 1rem 간격 추가 */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;

  .area,
  .name,
  .age,
  .gender,
  .applyDate,
  .resume {
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
