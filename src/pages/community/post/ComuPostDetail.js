import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const { id } = useParams();
    const [comuPost, setcomuPost] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태

    const handleGoListClick = () => {
        navigate("/communitymain");
    };

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

    /* 커뮤글 불러오기*/
    useEffect(() => {
        const fetchComuPosts = async () => {
            try {
                const response = await fetch(`/comupost/${id}`); // 백엔드 엔드포인트 URL
                if (!response.ok) {
                    throw new Error('Failed to fetch comu post');
                }
                const data = await response.json();
                setcomuPost(data); // 커뮤글 목록 state 업데이트
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };
        fetchComuPosts();
    }, [id]);

    /* 페이지 로딩 상태 관리 */
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!comuPost) {
        return <div>No post found</div>;
    }

    return(
        <ComuDetailContainer>
            <PageTitle text="커뮤니티" />
            <PostDetailWrapper>
                <PostTitle>
                    {comuPost.title}
                </PostTitle>
                <PostDetailInfoWrapper>
                    <span>{comuPost.userNickname}</span>
                    <span>|</span>
                    <span>{formatDate(comuPost.createdTime)}</span>
                    <span>|</span>
                    <span>조회수</span>
                    <span>{comuPost.viewCount}</span>
                </PostDetailInfoWrapper>
                <PostContentWrapper>
                    <span>{comuPost.content}</span>
                </PostContentWrapper>
                <AdPostLinkWrapper>
                    <PostLink to={`/jobaddetail/${comuPost.jobAd}`}>
                        <LinkIcon />
                        <span style={{marginLeft: "1rem"}}>해당 글 바로가기 클릭</span>
                    </PostLink>
                    <AdPostTitle>
                        <span>{comuPost.jobAdArea}</span>
                        <span style={{
                            fontFamily: "Pretendard-SemiBold",
                            marginLeft: "1rem"
                        }}>{comuPost.jobAdTitle}</span>
                    </AdPostTitle>
                </AdPostLinkWrapper>
                <CommentSection />
                <ReturnListBtn>
                    <RoundWhiteBtn 
                        text="목록으로"
                        onClick={handleGoListClick}
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

const ReturnListBtn = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
