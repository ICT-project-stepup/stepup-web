import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundGreenBtn from "../../components/buttons/RoundGreenBtn";
import ComuPostList from "./ComuPostList";
import CustomPagination from '../../components/CustomPagination';


const comuPosts = [
    {
        area: "경남 창녕군",
        comuTitle: "마늘 같이 뽑으러 가실 분~~",
        comuWriter: "홍익인간",
        NumOfComment: "5",
        NumOfView: "67",
        comuDate: "2024.05.17",
    },
    {
        area: "전남 진도군",
        comuTitle: "요즘 다들 어떠신가요...",
        comuWriter: "공수향",
        NumOfComment: "7",
        NumOfView: "76",
        comuDate: "2024.05.11",
    },
    {
        area: "충북 제천시",
        comuTitle: "서비스 이용 이렇게 하는거맞나요?",
        comuWriter: "임원복",
        NumOfComment: "11",
        NumOfView: "101",
        comuDate: "2024.04.23",
    },
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
]

/* 채민 */
export default function ComuMain() {
    const [activePage, setActivePage] = useState(1);
    const navigate = useNavigate();

    /* 페이지네이션에 필요한 변수들 */
    const totalItemsCount = comuPosts.length;
    const indexOfLastPost = activePage * 7;
    const indexOfFirstPost = indexOfLastPost - 7;
    const currentPosts = comuPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleWritingClick = () => {
        navigate("/publishComuPost");
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
                    <span className="comment">댓글</span>
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
    .view,
    .comment {
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