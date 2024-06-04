import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as LinkIcon} from "../../../icons/LinkIcon.svg";
import { ReactComponent as BigSearchIcon } from "../../../icons/BigSearchIcon.svg";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";

/* 채민 */
export default function PublishComuPost() {
    return(
        <PublishPostContainer>
            <PageTitle text="커뮤니티 글 작성" />
            <PostNote>건강한 커뮤니티 문화를 위해 글을 수정할 수 없으니, 신중하게 작성해주세요.</PostNote>
            <PostingWrapper>
                <PostTitleInput  
                    placeholder="제목을 입력해주세요."
                />
                <PostContentInput
                    placeholder="내용을 입력해주세요."
                />
                <SearchPostWrapper>
                    <PostLink to="/jobaddetail">
                        <LinkIcon />
                        <span style={{marginLeft: "1rem"}}>해당 글 바로가기 클릭</span>
                    </PostLink>
                    <SearchPost>
                        <SearchInput 
                            placeholder="돋보기 버튼을 눌러, 사람들과 같이 보고 싶은 글을 찾아보세요."
                        />
                        <button style={{
                            backgroundColor: "#F5F5F5",
                            border: "none",
                            cursor: "pointer"
                        }}>
                            <BigSearchIcon />
                        </button>
                    </SearchPost>
                </SearchPostWrapper>
                <PostingBtn>
                    <RoundWhiteBtn 
                        text="게시하기"
                        style={{
                            width: "15rem", height: "4.1rem",
                            fontFamily: "Pretendard-SemiBold",
                            fontSize: "1.75rem",
                            border: "0.15rem solid #8AA353"
                        }}
                    />
                </PostingBtn>
            </PostingWrapper>
        </PublishPostContainer>
    )
}

const PublishPostContainer = styled.div`
    width: auto;
    height: 52rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;

const PostNote = styled.span`
    font-family: Pretendard-Regular;
    font-size: 1.375rem;
    color: #6E6E6E;
    margin-top: 3.5rem;
`;

const PostingWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
`;

const PostTitleInput = styled.input`
    width: 100%;
    height: 5.5rem;
    font-family: Pretendard-SemiBold;
    font-size: 2.25rem;
    border: none;
    color: #8AA353;

    &::placeholder {
        color: #8AA353;
    }
    &:focus {
        outline: none;
        border: none;
    }
`;

const PostContentInput = styled.textarea`
    width: 100%;
    height: 12rem;
    font-family: Pretendard-Medium;
    font-size: 1.5rem;
    border-top: 0.15rem solid #AFBFA5;
    border-bottom: 0.15rem solid #AFBFA5;
    border-left: none;
    border-right: none;
    color: #2B2B2B;
    padding: 1.5rem 0;

    &::placeholder {
        color: #6E6E6E;
    }
    &:focus {
        outline: none;
        border-top: 0.15rem solid #AFBFA5;
        border-bottom: 0.15rem solid #AFBFA5;
        border-left: none;
        border-right: none;
    }
`;

const SearchPostWrapper = styled.div`
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
`;

const PostLink = styled(Link)`
    width: 24%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "Pretendard-SemiBold";
    font-size: 1.5rem;
    color: #8AA353;
    background-color: #E4ECD1;
    border-radius: 1.5rem 0 0 1.5rem;
`;

const SearchPost = styled.div`
    width: 76%;
    height: 100%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-radius: 0 1.5rem 1.5rem 0;
`;

const SearchInput = styled.input`
    width: 90%;
    font-family: Pretendard-Regular;
    font-size: 1.5rem;
    border: none;
    color: #6E6E6E;
    background-color: #F5F5F5;
    &:focus {
        outline: none;
        display: flex;
        justify-contnet: center;
        color: black;
`;

const PostingBtn = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;