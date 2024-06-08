import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as LinkIcon} from "../../../icons/LinkIcon.svg";
import CommentSection from "./CommentSection";
import RoundWhiteBtn from "../../../components/buttons/RoundWhiteBtn";


const comuPostInfo = {
    comuTitle: "마늘 같이 뽑으러 가실 분~~",
    comuWriter: "홍익인간",
    comuDate: "2024.05.17",
    numOfView: "67",
    comuContent: "혹시 다음주에 마늘 같이 뽑으러 가실 분 있으신가요?\n가서 같이 일하면서 친해져요 ㅎ\n댓글 부탁요.",
}

const adPostInfo = {
    area: "경남 창녕군",
    postTitle: "마늘 뽑으실 분 구합니다",
}

/* 채민 */
export default function ComuPostDetail() {
    return(
        <ComuDetailContainer>
            <PageTitle text="커뮤니티" />
            <PostDetailWrapper>
                <PostTitle>
                    {comuPostInfo.comuTitle}
                </PostTitle>
                <PostDetailInfoWrapper>
                    <span>{comuPostInfo.comuWriter}</span>
                    <span>|</span>
                    <span>{comuPostInfo.comuDate}</span>
                    <span>|</span>
                    <span>조회수</span>
                    <span>{comuPostInfo.numOfView}</span>
                </PostDetailInfoWrapper>
                <PostContentWrapper>
                    <span>{comuPostInfo.comuContent}</span>
                </PostContentWrapper>
                <AdPostLinkWrapper>
                    <PostLink to="/jobaddetail">
                        <LinkIcon />
                        <span style={{marginLeft: "1rem"}}>해당 글 바로가기 클릭</span>
                    </PostLink>
                    <AdPostTitle>
                        <span>{adPostInfo.area}</span>
                        <span style={{
                            fontFamily: "Pretendard-SemiBold",
                            marginLeft: "1rem"
                        }}>{adPostInfo.postTitle}</span>
                    </AdPostTitle>
                </AdPostLinkWrapper>
                <CommentSection />
                <ReturnListBtn to="/communitymain">
                    <RoundWhiteBtn 
                        text="목록으로"
                        style={{
                            width: "15rem", height: "4.1rem",
                            fontFamily: "Pretendard-SemiBold",
                            fontSize: "1.75rem",
                            border: "0.15rem solid #8AA353"
                        }}
                    />
                </ReturnListBtn>
            </PostDetailWrapper>
        </ComuDetailContainer>
    )
}

const ComuDetailContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;

const PostDetailWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 5rem;
`;

const PostTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-family: Pretendard-SemiBold;
    font-size: 2.25rem;
    color: #8AA353;
`;

const PostDetailInfoWrapper = styled.div`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    font-family: Pretendard-Regular;
    font-size: 1.375rem;
    color: #6E6E6E;
    margin: 1rem 0 0.5rem 0;
`;

const PostContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    font-family: Pretendard-Medium;
    font-size: 1.5rem;
    color: #2B2B2B;
    border-top: 0.15rem solid #AFBFA5;
    border-bottom: 0.15rem solid #AFBFA5;
    border-left: none;
    border-right: none;
    padding: 2rem 0;
    white-space: pre-line;
`;

const AdPostLinkWrapper = styled.div`
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

const AdPostTitle = styled.div`
    width: 76%;
    height: 100%;
    background-color: #F5F5F5;
    font-family: "Pretendard-Regular";
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    border-radius: 0 1.5rem 1.5rem 0;
`;

const ReturnListBtn = styled(Link)`
    width: 100%;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
