import { useState, useEffect } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import ApplyStatus from "../../components/homeless/application/ApplyStatus";
import CustomPagination from "../../components/CustomPagination";


/* 채은 */
export default function ApplicationHistory() {
  const [activePage, setActivePage] = useState(1);
  const [applyStatusPosts, setApplyStatusPosts] = useState([]);
  const itemsPerPage = 7;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem("id"); // 로컬 스토리지에서 id 가져오기
      const response = await fetch(`/api/applicant/jobads/${userId}`);
      if (!response.ok) {
        throw new Error("서버에서 데이터를 가져오는 중 오류가 발생했습니다.");
      }
      const data = await response.json();
      setApplyStatusPosts(data);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      // 오류 처리 로직 추가
    }
  };

  /* 페이지네이션 변수들 */
  const totalItemsCount = applyStatusPosts.length;
  const indexOfLastPost = activePage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = applyStatusPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <MainContainer>
      <PageTitle text="지원 현황" />
      <StatusListWrapper>
        <ListTitle>
          <span className="area">지역</span>
          <span className="title">제목</span>
          <span className="salary">급여</span>
          <span className="time">시간</span>
          <span className="date">등록일</span>
          <span className="state">현황</span>
        </ListTitle>
        {currentPosts.map((postInfo, index) => (
          <ApplyStatus key={index} postInfo={postInfo} />
        ))}
      </StatusListWrapper>

      <CustomPagination
        activePage={activePage}
        totalItemsCount={totalItemsCount}
        handlePageChange={handlePageChange}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
    width: auto;
    display: block;
    align-items: flex-start;
    padding: 2rem 6rem 6rem 6rem;
`;

const StatusListWrapper = styled.div`
  width: 100%;
  display: block;
  border-top: solid 0.2rem black;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const ListTitle = styled.div`
  border-bottom: solid 0.1rem black;
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
  .date,
  .state {
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .salary,
  .time {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
