import React, { useState } from 'react';
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundGreenBtn from "../../components/buttons/RoundGreenBtn";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import JobAdList from './JobAdList';
import Pagination from "react-js-pagination";


const postData = [
    {
        area: "경남 창녕군",
        postTitle: "마늘 뽑으실 분 구합니다",
        salaryType: "일급",
        salary: "100,000",
        workTime: "09:00 ~ 16:00",
        postDate: "2024.05.17",
        postState: "모집 중", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
    {
        area: "전남 진도군",
        postTitle: "대파 뽑으실 분 구해요",
        salaryType: "시급",
        salary: "9,600",
        workTime: "08:00 ~ 14:00",
        postDate: "2024.05.11",
        postState: "마감", 
    },
];

/* 채민 */
export default function Main() {
    const [isListMode, setListMode] = useState(true);
    const [activePage, setActivePage] = useState(1);

    /* 페이지네이션에 필요한 변수들 */
    const itemsPerPage = 7;
    const totalItemsCount = postData.length;
    const indexOfLastPost = activePage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost);

    const toggleListMode = () => {
        setListMode(true);
    };

    const toggleMapMode = () => {
        setListMode(false);
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return(
        <MainContainer>
            <PageTitle text="구인글 보기" />
            <CountModeWrapper>
                <span>총 31건</span>
                <ModeBtnWrapper>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        {isListMode ? (
                            <RoundGreenBtn 
                                text="목록형"
                                onClick={toggleListMode}
                                style={{width: "5.5rem", height: "2.75rem", fontFamily: "Pretendard-regular"}}
                            />
                        ) : (
                            <RoundWhiteBtn 
                                text="목록형"
                                onClick={toggleListMode}
                                style={{width: "5.5rem", height: "2.75rem", fontFamily: "Pretendard-regular"}}
                            />
                        )}
                    </div>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        {isListMode ? (
                            <RoundWhiteBtn 
                                text="지도형"
                                onClick={toggleMapMode}
                                style={{width: "5.5rem", height: "2.75rem", fontFamily: "Pretendard-Regular"}}
                            />
                        ) : (
                            <RoundGreenBtn 
                                text="지도형"
                                onClick={toggleMapMode}
                                style={{width: "5.5rem", height: "2.75rem", fontFamily: "Pretendard-Regular"}}
                            />
                        )}
                    </div>
                </ModeBtnWrapper>
            </CountModeWrapper>
            {isListMode ? (
                <JobAdListWrapper>
                    <ListTitle>
                        <span className="area">지역</span>
                        <span className="title">제목</span>
                        <span className="salary">급여</span>
                        <span className="time">시간</span>
                        <span className="date">등록일</span>
                        <span className="state">현황</span>
                    </ListTitle>
                    {currentPosts.map((postInfo, index) => ( <JobAdList key={index} postInfo={postInfo} /> ))}
                    <PaginationWrapper>
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={totalItemsCount}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            prevPageText={<PageText style={{ opacity: activePage === 1 ? 0 : 1 }}>이전</PageText>}
                            nextPageText={<PageText style={{ opacity: activePage === Math.ceil(totalItemsCount / itemsPerPage) ? 0 : 1 }}>다음</PageText>}
                            hideFirstLastPages
                        />
                    </PaginationWrapper>
                </JobAdListWrapper>
            ) : (
                <MapWrapper>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5rem",
                        fontSize: "2rem",
                        fontFamily: "Pretendard-Medium"
                    }}>
                        지도 API 추가 예정
                    </div>
                </MapWrapper>
            )}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: auto;
    height: 52rem;
    display: block;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;

const CountModeWrapper = styled.div`
    width: 100%;
    height: 2.75rem;
    font-family: "Pretendard-Regular";
    font-size: 1.375rem;
    color: #6E6E6E;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
`;

const ModeBtnWrapper = styled.div`
    width: 12rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const JobAdListWrapper = styled.div`
    width: 100%;
    height: 3.938rem;
    display: block;
    border-top: solid 0.2rem black;
    border-bottom: solid 0.1rem black;
    margin-top: 1rem;
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

const MapWrapper = styled.div`
    width: 100%;
    height: 45%;
    borderRadius: 2rem;
`;

const PaginationWrapper = styled.div`
    margin: 3rem 0;
    font-family: Pretendard-Regular;
    font-size: 1.5rem;

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    ul.pagination li {
        width: 3.5rem;
        height: 2.8rem;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6E6E6E;
    }
    
    ul.pagination li a {
        text-decoration: none;
        background-color: none;
        padding: 0.55rem 1.1rem;
        border-radius: 0.75rem;
        color: #6E6E6E;
    }
    
    ul.pagination li.active a {
        color: white;
        background-color: #8AA353;
    }
`;

const PageText = styled.div`
    width: 4rem;
    display: flex;
    justify-content: center;
    pading: 0;
    font-size: 1.188rem;
`;

