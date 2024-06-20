import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";

export default function MyPost({ postInfo }) {
  const navigate = useNavigate();

  const handleApplicantClick = (e) => {
    e.preventDefault(); // 기존의 JobAdDetail로 이동하지 못하게 막음
    navigate("/showapplicant");
  };

  return (
    <PostListWrapper postState={postInfo.postState} to="/JobAdDetail">
      <span className="title">{postInfo.postTitle}</span>
      <span className="date">{postInfo.postDate}</span>
      <span className="state">{postInfo.postState}</span>
      <span className="applicant">
        <RoundWhiteBtn
          text="지원자 정보 바로가기"
          onClick={handleApplicantClick}
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "12.625rem", // 최대 크기 설정
            height: "2.6875rem",
            borderRadius: "0.9375rem",
            color: "#6E6E6E",
            fontFamily: "Pretendard-Medium",
            lineHeight: "1.4925rem",
            position: "relative",
          }}
        />
      </span>
    </PostListWrapper>
  );
}

const PostListWrapper = styled(Link)`
  width: 100%;
  height: 4.2rem;
  border-bottom: solid 0.1rem #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  color: #2b2b2b;

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
    color: ${({ postState }) =>
      postState === "모집 중" ? "#6698D2" : "#D66F6F"};
  }
  .title {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Pretendard-SemiBold";
  }

  .applicant {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Pretendard-SemiBold";
  }
`;
