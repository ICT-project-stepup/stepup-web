import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";

export default function MyPost({ applicantData, boardNumber }) {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate(`/showresume/${applicantData.userId}/${boardNumber}`);
  };

  if (!applicantData) {
    return null;
  }

  return (
    <PostListWrapper>
      <span className="area">{applicantData.applicantArea}</span>
      <span className="name" style={{ fontFamily: "Pretendard-SemiBold" }}>
        {applicantData.applicantName}
      </span>
      <span className="age">{applicantData.applicantAge}</span>
      <span className="gender">{applicantData.applicantGender}</span>
      <span className="applyDate">{applicantData.applicantDate}</span>
      <span className="resume">
        <RoundWhiteBtn
          text="이력서 보기"
          onClick={handleResumeClick}
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "9.5rem", // 최대 크기 설정
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

const PostListWrapper = styled.div`
  width: 100%;
  height: 4.2rem;
  border-bottom: solid 0.0625rem #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-family: "Pretendard-Regular";
  font-size: 1.375rem;
  color: #2b2b2b;

  .area,
  .name,
  .age,
  .gender,
  .applyDate,
  .resume {
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
