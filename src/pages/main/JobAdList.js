import { styled } from "styled-components";


export default function JobAdList({ postInfo }) {
    return(
        <PostListWrapper postState={postInfo.postState}>
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
            <span className="time">{postInfo.workTime}</span>
            <span className="date">{postInfo.postDate}</span>
            <span className="state">{postInfo.postState}</span>
        </PostListWrapper>
    );
};

const PostListWrapper = styled.div`
    width: 100%;
    height: 4.2rem;
    border-bottom: solid 0.1rem #6E6E6E;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard-Regular";
    font-size: 1.5rem;

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