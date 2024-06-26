import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";


export default function ComuPostList({ postInfo }) {
    const navigate = useNavigate();

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

    return(
        <PostListWrapper onClick={() => navigateToDetail(postInfo.communityNumber)}>
            <span className="area">{postInfo.jobAdArea}</span>
            <span className="title">{postInfo.title}</span>
            <span className="writer">{postInfo.userNickname}</span>
            <span className="view">{postInfo.viewCount}</span>
            <span className="date">{formatDate(postInfo.createdTime)}</span>
        </PostListWrapper>
    );
}

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