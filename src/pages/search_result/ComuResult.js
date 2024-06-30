import { useState } from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CustomPagination from '../../components/CustomPagination';

export default function ComuResult({ postInfo = [] }) {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState(1);

    /* 페이지네이션에 필요한 변수들 */
    const totalItemsCount = postInfo.length;
    const indexOfLastPost = activePage * 7;
    const indexOfFirstPost = indexOfLastPost - 7;
    const currentPosts = postInfo.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    /* 상세 페이지로 이동 */
    const navigateToDetail = (postId) => {
        const authority = window.localStorage.getItem("authority");
        if (authority === "ROLE_USER1") {
            navigate(`/comupostdetail/${postId}`);
            updatePostViews(postId); // 상세 페이지로 이동 시 조회수 업데이트
        } else if (authority === "ROLE_USER2") {
            alert("커뮤니티 글은 구직자 회원만 확인하실 수 있습니다.");
        }
        else {
            alert("로그인 후 이용해주세요.");
        }
    };

    /* 조회수 업데이트 */
    const updatePostViews = async (postId) => {
        try {
            const response = await fetch(`/api/comupost/${postId}/view`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId }),
            });
            if (!response.ok) {
                throw new Error('Failed to update post views');
            }
            // 조회수 업데이트 성공
        } catch (error) {
            console.error('Error updating post views:', error);
        }
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
            <ResultCount>커뮤니티 글 {totalItemsCount}건</ResultCount>
            <ComuResultContainer>
                <ListTitle>
                    <span className="area">지역</span>
                    <span className="title">제목</span>
                    <span className="writer">작성자</span>
                    <span className="view">조회수</span>
                    <span className="date">작성일</span>
                </ListTitle>
            </ComuResultContainer>
            {currentPosts.map((post, index) => (
                <PostListWrapper onClick={() => navigateToDetail(post.communityNumber)}>
                    <span className="area">{post.jobAdArea}</span>
                    <span className="title">{post.title}</span>
                    <span className="writer">{post.userNickname}</span>
                    <span className="view">{post.viewCount}</span>
                    <span className="date">{formatDate(post.createdTime)}</span>
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

const ComuResultContainer = styled.div`
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
    .writer {
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        width: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .view {
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .time {
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const PostListWrapper = styled.div`
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
    cursor: pointer;

    .area,
    .date,
    .writer {
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        width: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Pretendard-SemiBold";
    }
    .view {
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .time {
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;