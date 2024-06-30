import { useState } from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import CustomPagination from '../../components/CustomPagination';

export default function JobAdResult({ postInfo = [] }) {
    const [activePage, setActivePage] = useState(1);

    /* 페이지네이션에 필요한 변수들 */
    const totalItemsCount = postInfo.length;
    const indexOfLastPost = activePage * 7;
    const indexOfFirstPost = indexOfLastPost - 7;
    const currentPosts = postInfo.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

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

    return (
        <MainContainer>
            <ResultCount>구인글 {totalItemsCount}건</ResultCount>
            <JobAdResultContainer>
                <ListTitle>
                    <span className="area">지역</span>
                    <span className="title">제목</span>
                    <span className="salary">급여</span>
                    <span className="time">시간</span>
                    <span className="date">등록일</span>
                    <span className="state">현황</span>
                </ListTitle>
            </JobAdResultContainer>
            {currentPosts.map((post, index) => (
                <PostListWrapper key={index} postState={post.postState} to={`/jobaddetail/${post.boardNumber}`}>
                    <span className="area">{post.area}</span>
                    <span className="title">{post.postTitle}</span>
                    <div className="salary">
                        <div className="salaryWrapper">
                            <div className="salaryType">
                                <span>{post.salaryType}</span>
                            </div>
                            <span>{post.salary}</span>
                        </div>
                    </div>
                    <span className="time">{post.startTime} ~ {post.endTime}</span>
                    <span className="date">{formatDate(post.postDate)}</span>
                    <span className="state">{post.postState}</span>
                </PostListWrapper>
            ))}
            <CustomPagination
                activePage={activePage}
                totalItemsCount={totalItemsCount}
                handlePageChange={handlePageChange}
            />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: auto;
    display: block;
    align-items: flex-start;
    margin-top: 5rem;
`;

const JobAdResultContainer = styled.div`
    width: 100%;
    height: 3.938rem;
    display: flex;
    flex-direction: column;
    border-top: solid 0.2rem black;
    border-bottom: solid 0.1rem black;
    margin-top: 1rem;
`;

const ResultCount = styled.span`
    font-family: "Pretendard-Regular";
    font-size: 1.375rem;
    color: #6E6E6E;
    display: flex;
    position: left;
`;

const ListTitle = styled.div`
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

const PostListWrapper = styled(Link)`
    width: 100%;
    height: 4.2rem;
    border-bottom: solid 0.1rem #6E6E6E;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-family: "Pretendard-Regular";
    font-size: 1.5rem;
    color: black;

    .area,
    .date {
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .state {
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Pretendard-SemiBold";
        color: ${({ postState }) => postState === "모집 중" ? "#6698D2" : "#D66F6F"};
    }
    .salary,
    .time {
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Pretendard-SemiBold";
    }
    .salaryWrapper {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .salaryType {
        width: 4.188rem;
        height: 2.875rem;
        background: #ffffff;
        border-radius: 1.5625rem;
        font-size: 1.375rem;
        color: #2B2B2B;
        line-height: 1.5rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        border: 0.1rem solid #AFBFA5;
        margin-right: 0.8rem;
    }
`;