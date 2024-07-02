import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import CustomPagination from "../../components/CustomPagination";
import MyApplicant from "../../components/farm/MyApplicant";
import { useParams } from "react-router-dom";

export default function ShowApplicant() {
  const [applicants, setApplicants] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const { boardNumber } = useParams();

  useEffect(() => {
    axios
      .get(`/api/applicant/${boardNumber}`)
      .then((response) => {
        setApplicants(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("There was an error fetching the applicants!", error);
      });
  }, [boardNumber]);

  // Pagination variables
  const totalItemsCount = applicants.length;
  const itemsPerPage = 7;
  const indexOfLastPost = activePage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = applicants.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

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
        {currentPosts.map((applicantData, index) => (
          <div key={index}>
            <MyApplicant
              applicantData={applicantData}
              boardNumber={boardNumber}
            />
          </div>
        ))}
        <CustomPagination
          activePage={activePage}
          totalItemsCount={totalItemsCount}
          itemsCountPerPage={itemsPerPage}
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
