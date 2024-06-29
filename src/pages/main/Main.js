import { useState, useEffect } from 'react';
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import RoundGreenBtn from "../../components/buttons/RoundGreenBtn";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import JobAdList from './JobAdList';
import CustomPagination from '../../components/CustomPagination';
import MyMap from './MyMap';

/* 채민 */
export default function Main() {
    const [isListMode, setListMode] = useState(true);
    const [activePage, setActivePage] = useState(1);
    const [mapKey, setMapKey] = useState(0);
    const [totalJobAds, setTotalJobAds] = useState(0);
    const [jobAds, setJobAds] = useState([]);

    useEffect(() => {
        fetchTotalJobAds(); // 페이지 로딩 시 총 구인글 개수를 가져오는 함수 호출
        fetchJobAds(); // 페이지 로딩 시 구인글 목록을 가져오는 함수 호출
    }, []);

    /* 총 구인글 개수 */
    const fetchTotalJobAds = async () => {
        try {
            const response = await fetch('/api/jobad/count'); // 백엔드 엔드포인트 URL
            if (!response.ok) {
                throw new Error('Failed to fetch total job ads');
            }
            const data = await response.json();
            setTotalJobAds(data); // 총 구인글 개수 state 업데이트
        } catch (error) {
            console.error('Error fetching total job ads:', error);
        }
    };

    /* 구인글 목록 불러오기*/
    const fetchJobAds = async () => {
        try {
            const response = await fetch('/api/jobad'); // 백엔드 엔드포인트 URL
            if (!response.ok) {
                throw new Error('Failed to fetch job ads');
            }
            const data = await response.json();
            setJobAds(data); // 구인글 목록 state 업데이트
        } catch (error) {
            console.error('Error fetching job ads:', error);
        }
    };

    /* 페이지네이션에 필요한 변수들 */
    const totalItemsCount = jobAds.length;
    const indexOfLastPost = activePage * 7;
    const indexOfFirstPost = indexOfLastPost - 7;
    const currentPosts = jobAds.slice(indexOfFirstPost, indexOfLastPost);

    const toggleListMode = () => {
        setListMode(true);
    };

    const toggleMapMode = () => {
        setListMode(false);
        setMapKey(prevKey => prevKey + 1);  //key를 변경하여 MyMap을 다시 렌더링
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return(
        <MainContainer>
            <PageTitle text="구인글 보기" />
            <CountModeWrapper>
                <span>총 {totalJobAds}건</span>
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
                    {currentPosts.map((jobAds, index) => ( <JobAdList key={index} postInfo={jobAds} /> ))}
                    <CustomPagination
                        activePage={activePage}
                        totalItemsCount={totalItemsCount}
                        handlePageChange={handlePageChange}
                    />
                </JobAdListWrapper>
            ) : (
                <MapWrapper key={mapKey}>
                    <MyMap />
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