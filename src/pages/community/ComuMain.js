import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundGreenBtn from "../../components/buttons/RoundGreenBtn";
import ComuPostList from "./ComuPostList";
import CustomPagination from '../../components/CustomPagination';


/* 채민 */
export default function ComuMain() {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState(1);
    const [comuPosts, setcomuPosts] = useState([]);

    useEffect(() => {
        fetchComuPosts(); // 페이지 로딩 시 커뮤글 목록을 가져오는 함수 호출
    }, []);

    /* 커뮤글 목록 불러오기*/
    const fetchComuPosts = async () => {
        try {
            const response = await fetch('/api/comupost'); // 백엔드 엔드포인트 URL
            if (!response.ok) {
                throw new Error('Failed to fetch comu posts');
            }
            const data = await response.json();
            setcomuPosts(data); // 커뮤글 목록 state 업데이트
        } catch (error) {
            console.error('Error fetching comu posts:', error);
        }
    };

    /* 페이지네이션에 필요한 변수들 */
    const totalItemsCount = comuPosts.length;
    const indexOfLastPost = activePage * 7;
    const indexOfFirstPost = indexOfLastPost - 7;
    const currentPosts = comuPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleWritingClick = () => {
        const authority = window.localStorage.getItem("authority");
        if (authority === "ROLE_USER1") {
            navigate("/publishComuPost");
            return;
        }
        alert("로그인 후 이용해주세요.");
    };

    return(
        <ComuMainContainer>
            <PageTitle text="커뮤니티" />
            <WritingBtnWrapper>
                <RoundGreenBtn 
                    text="글쓰기"
                    onClick={handleWritingClick}
                    style={{width: "5.5rem", height: "2.75rem", fontFamily: "Pretendard-regular"}}
                />
            </WritingBtnWrapper>
            <ComuListWrapper>
                <ListTitle>
                    <span className="area">지역</span>
                    <span className="title">제목</span>
                    <span className="writer">작성자</span>
                    <span className="view">조회수</span>
                    <span className="date">등록일</span>
                </ListTitle>
                {currentPosts.map((postInfo, index) => ( <ComuPostList key={index} postInfo={postInfo} /> ))}
                <CustomPagination
                    activePage={activePage}
                    totalItemsCount={totalItemsCount}
                    handlePageChange={handlePageChange}
                />
            </ComuListWrapper>
        </ComuMainContainer>
    )
}

const ComuMainContainer = styled.div`
    width: auto;
    height: 52rem;
    display: block;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;

const WritingBtnWrapper = styled.div`
    width: 100%;
    height: 2.75rem;
    font-family: "Pretendard-Regular";
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;
`;

const ComuListWrapper = styled.div`
    width: 100%;
    height: 3.938rem;
    display: block;
    border-top: solid 0.2rem black;
    border-bottom: solid 0.1rem black;
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