import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export default function ComuPostList({ postInfo }) {
    return(
        <PostListWrapper to="/comupostdetail">
            <span className="area">{postInfo.area}</span>
            <span className="title">{postInfo.comuTitle}</span>
            <span className="writer">{postInfo.comuWriter}</span>
            <span className="comment">{postInfo.NumOfComment}</span>
            <span className="view">{postInfo.NumOfView}</span>
            <span className="date">{postInfo.comuDate}</span>
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