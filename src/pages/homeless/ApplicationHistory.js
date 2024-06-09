import { useState } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import ApplyStatus from "../../components/homeless/application/ApplyStatus";
import ApplyHistory from "../../components/homeless/application/ApplyHistory";
import CustomPagination from "../../components/CustomPagination";

const applyStatusData = [
  {
    area: "경남 창녕군",
    postTitle: "마늘 뽑으실 분 구합니다",
    salaryType: "일급",
    salary: "100,000",
    workTime: "09:00 ~ 16:00",
    postDate: "2024.05.17",
    postState: "지원 중",
  },
  {
    area: "전남 진도군",
    postTitle: "대파 뽑으실 분 구해요",
    salaryType: "시급",
    salary: "9,600",
    workTime: "08:00 ~ 14:00",
    postDate: "2024.05.11",
    postState: "성사됨",
  },
  {
    area: "충북 제천시",
    postTitle: "집 보수 도와주실 분",
    salaryType: "일급",
    salary: "70,000",
    workTime: "08:00 ~ 18:00",
    postDate: "2024.04.23",
    postState: "마감",
  },
];

const applyHistoryData = [
  {
    area: "경남 창녕군",
    postTitle: "마늘 뽑으실 분 구합니다",
    salaryType: "일급",
    salary: "100,000",
    workTime: "09:00 ~ 16:00",
    postDate: "2024.03.17",
    postState: "성사됨",
  },
  {
    area: "전남 진도군",
    postTitle: "대파 뽑으실 분 구해요",
    salaryType: "시급",
    salary: "9,600",
    workTime: "08:00 ~ 14:00",
    postDate: "2024.02.11",
    postState: "성사됨",
  },
  {
    area: "충북 제천시",
    postTitle: "집 보수 도와주실 분",
    salaryType: "일급",
    salary: "70,000",
    workTime: "08:00 ~ 18:00",
    postDate: "2024.04.23",
    postState: "마감",
  },
];

/* 채은 */
export default function ApplicationHistory() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 7;

  const allData = [...applyStatusData, ...applyHistoryData];
  const totalItemsCount = allData.length;
  const indexOfLastPost = activePage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const currentStatusPosts = currentPosts.filter((post) =>
    applyStatusData.includes(post)
  );
  const currentHistoryPosts = currentPosts.filter((post) =>
    applyHistoryData.includes(post)
  );

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
          {currentStatusPosts.map((postInfo, index) => (
            <ApplyStatus key={index} postInfo={postInfo} />
          ))}
        </StatusListWrapper>

        <PageTitle text="지원 내역" />
        <HistoryListWrapper>
          <ListTitle>
            <span className="area">지역</span>
            <span className="title">제목</span>
            <span className="salary">급여</span>
            <span className="time">시간</span>
            <span className="date">등록일</span>
            <span className="state">현황</span>
          </ListTitle>
          {currentHistoryPosts.map((postInfo, index) => (
            <ApplyHistory key={index} postInfo={postInfo} />
          ))}
        </HistoryListWrapper>

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
    padding: 2rem 6rem 0 6rem;
`;

const StatusListWrapper = styled.div`
  width: 100%;
  display: block;
  border-top: solid 0.2rem black;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const HistoryListWrapper = styled.div`
  width: 100%;
  display: block;
  border-top: solid 0.2rem black;
  margin-top: 10rem;
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
