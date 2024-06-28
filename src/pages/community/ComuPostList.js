import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export default function ComuPostList({ postInfo }) {
    const formatDate = (isoDateString) => {  // 날짜 형식 변환
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

    return(
        <PostListWrapper to="/comupostdetail">
            <span className="area">{postInfo.jobAdArea}</span>
            <span className="title">{postInfo.title}</span>
            <span className="writer">{postInfo.userNickname}</span>
            <span className="comment">0</span>
            <span className="view">{postInfo.viewCount}</span>
            <span className="date">{formatDate(postInfo.createdTime)}</span>
        </PostListWrapper>
    );
}

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