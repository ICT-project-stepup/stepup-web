import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';


const getStateColor = (postState) => {
    switch (postState) {
        case "지원 중":
            return "#6698D2";
        case "성사됨":
            return "#8AA353";
        case "마감":
            return "#D66F6F";
        default:
            return "#000000"; // 기본 색상
    }
};

export default function ApplyStatus({ postInfo }) {
    const [applyStatus, setApplyStatus] = useState(null);
    const [postState, setPostState] = useState("지원 중");

    /* 날짜 형식 변환 */
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

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // applyStatus가 변경될 때마다 passState 값을 확인하여 postState 상태 업데이트
        if (applyStatus && applyStatus.passState) {
            setPostState("성사됨");
        } else {
            setPostState("지원 중");
        }
    }, [applyStatus]);

    /* 구인글에 대한 지원 내역을 로드 */
    const fetchData = async () => {
        try {
            const userId = localStorage.getItem("id"); // 로컬 스토리지에서 id 가져오기
            const response = await fetch(`/api/applicant/user/${userId}/jobad/${postInfo.boardNumber}`);
            if (!response.ok) {
                throw new Error("서버에서 데이터를 가져오는 중 오류가 발생했습니다.");
            }
            const data = await response.json();
            setApplyStatus(data);
        } catch (error) {
            console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
            // 오류 처리 로직 추가
        }
    };


    return(
        <PostListWrapper postState={postState} to={`/jobaddetail/${postInfo.boardNumber}`}>
            <span className="area">{postInfo.area}</span>
            <span className="title">{postInfo.postTitle}</span>
            <div className="salary">
                <div className="salaryWrapper">
                    <div className="salaryType">
                        <span>{postInfo.salaryType}</span>
                    </div>
                    <span>{postInfo.salary}</span>
                </div>
            </div>
            <span className="time">{postInfo.startTime} ~ {postInfo.endTime}</span>
            <span className="date">{formatDate(postInfo.postDate)}</span>
            <span className="state">{postState}</span>
        </PostListWrapper>
    );
};

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
        color: ${({ postState }) => getStateColor(postState)};
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