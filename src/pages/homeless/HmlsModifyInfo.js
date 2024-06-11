import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import { ReactComponent as ProfileIcon } from "../../icons/ProfileIcon.svg";
import RoundWhiteBtn from "../../components/buttons/RoundWhiteBtn";
import { useNavigate } from "react-router-dom";
import PlaceHolder from "../../components/PlaceHolder";

/* 채은 */
export default function HmlsModifyInfo() {
  const navigate = useNavigate();

  const handlePicClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <PageTitle text="정보 수정" />
      <SubText>사진</SubText>

      <DefaultPic>
        <StyledProfile />
        <RoundWhiteBtn
          text="사진 등록"
          onClick={handlePicClick}
          style={{
            boxSizing: "border-box",
            color: "#8AA353",
            width: "7.1875rem",
            height: "2.6875rem",
            borderRadius: "0.9375rem",
            cursor: "pointer",
            fontFamily: "Pretendard-Medium",
            fontWeight: 500,
            lineHeight: "1.4925rem",
            position: "relative",
            marginTop: "5.5rem",
            marginLeft: "1.5rem",
          }}
        />
      </DefaultPic>

      <PostContent>
        <RequirementsTable>
          <tbody>
            <tr>
              <td>구분</td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>별명</td>
              <td><PlaceHolder /></td>
            </tr>
            <tr>
              <td>비밀번호 변경</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>소속센터</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>희망 근로 지역</td>
              <td>버튼추가할거예옹</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>버튼추가할거예옹</td>
            </tr>
          </tbody>
        </RequirementsTable>
      </PostContent>

      <BtnWrapper>
        <RoundWhiteBtn
          text="완료"
          onClick={handlePicClick}
          style={{
            boxSizing: "border-box",
            width: "15.0625rem",
            height: "4.1875rem",
            cursor: "pointer",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.75rem",
            fontWeight: 500,
            lineHeight: "1.4925rem",
            position: "relative",
            border: "0.125rem solid #afbfa5",
          }}
        />
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  display: block;
  align-items: flex-start;
  padding: 2rem 6rem 0 6rem;
`;

const SubText = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 2rem;
  color: #6e6e6e;
  margin-top: 5.9375rem;
  width: 100%;
  display: flex;
`;

const StyledProfile = styled(ProfileIcon)`
  width: 143px;
  height: 143px;
`;

const DefaultPic = styled.div`
  display: flex;
  align-items: row;
  margin-top: 1.6875rem;
`;

const PostContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RequirementsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: 0.8125rem;

  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-align: left;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
