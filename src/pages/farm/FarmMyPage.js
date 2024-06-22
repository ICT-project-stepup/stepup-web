import { React, useState } from "react";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import CustomPagination from "../../components/CustomPagination";
import { useNavigate } from "react-router-dom";
import MyPost from "../../components/farm/MyPost";

const userDummy = {
  name: "박농가",
};

const postData = [
  {
    postTitle: "마늘 뽑으실 분 구합니다",
    postDate: "2024.05.17",
    postState: "모집 중",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
  {
    postTitle: "벽화 그리기 모집",
    postDate: "2024.03.23",
    postState: "마감",
  },
];

/* 예은 */
export default function FarmMyPage() {
  const navigate = useNavigate();

  const handleModifyClick = () => {
    navigate("/farmmodifyinfo");
  };

  const [activePage, setActivePage] = useState(1);

  /* 페이지네이션에 필요한 변수들 */
  const totalItemsCount = postData.length;
  const indexOfLastPost = activePage * 7;
  const indexOfFirstPost = indexOfLastPost - 7;
  const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const currentStatusPosts = currentPosts.filter((post) =>
    postData.includes(post)
  );

  return (
    <Container>
      <PageTitle text="내 정보" style={{ position: "relative" }} />
      <ProfileBox>
        <StyledProfile />
        <Text>{userDummy.name} 님</Text>
        <RoundWhiteBtn
          text="정보 수정"
          onClick={handleModifyClick}
          style={{
            width: "7.1875rem",
            height: "2.6875rem",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.25rem",
            borderRadius: "0.9375rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "7.75rem",
            position: "relative",
          }}
        />
      </ProfileBox>

      <PageTitle text="내가 쓴 글" style={{ position: "relative" }} />
      <CountWrapper>
        <span>총 {totalItemsCount}건</span>
      </CountWrapper>
      <ListWrapper>
        <ListTitle>
          <span className="title">제목</span>
          <span className="date">등록일</span>
          <span className="state">현황</span>
          <span className="applicant" />
        </ListTitle>
        {currentStatusPosts.map((postInfo, index) => (
          <MyPost key={index} postInfo={postInfo} />
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

const ProfileBox = styled.div`
  /* 프로필 네모 박스 */
  margin-top: 2rem;
  margin-bottom: 3.375rem;
  width: 41.25rem;
  height: 13.125rem;
  border: 0.1875rem solid rgba(175, 191, 165, 0.4);
  border-radius: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.25rem 0.25rem rgba(175, 191, 165, 0.4); // 테두리에만 그림자 추가
`;

const StyledProfile = styled(ProfileIcon)`
  // 프로필 이미지
  margin-right: 1.25rem;
`;

const Text = styled.span`
  left: 46.81%;
  right: 43.96%;
  top: 39.84%;
  bottom: 55.96%;
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.6875rem;
  display: flex;
  align-items: center;
  color: #8aa353;
  margin-right: 1.25rem;
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
  width: 85%;
  max-width: 58rem;
  display: block;
  border-top: solid 0.125rem #2b2b2b;
  margin-top: 2rem;
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

  .date,
  .state {
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .applicant,
  .title {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
