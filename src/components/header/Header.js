import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/Logo.svg';
import SearchBar from "./SearchBar";
import axios from "axios";


export default function Header() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");

    /* 토큰 확인하여 로그인 여부 확인 후 유저 아이디 추출 */
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            try {
                const decodedToken = parseJwt(token);
                const userId = decodedToken.sub; // sub 클레임에서 유저 아이디 추출
                setUserId(userId);
                fetchUserData(userId); // 아이디를 바탕으로 유저 데이터 요청
            } catch (error) {
                console.error("토큰 디코딩 오류:", error);
                setUserId(""); // 토큰 디코딩 실패 시 초기화
            }
        } else {
            setUserId(""); // 토큰이 없는 경우 초기화
        }
    }, []);

    /* 유저 데이터 요청 함수 */
    const fetchUserData = async (userId) => {
        try {
            const response = await axios.post('/api/members/find-id', { userId }, {
                headers: { "Content-Type": 'application/json' }
            });
            if (response.status === 200) {  // 받아온 유저 데이터를 로컬 스토리지에 저장
                const { id, name, authority } = response.data;
                window.localStorage.setItem("id", id);
                window.localStorage.setItem("name", name);
                window.localStorage.setItem("authority", authority);
                window.localStorage.setItem("userId", userId);
                setName(name);
            }
        } catch (error) {
            console.error("유저 데이터 요청 오류:", error);
        }
    };

    /* 권한에 따라 내 정보 페이지로 이동 */
    const handleMyPage = () => {
        const authority = window.localStorage.getItem("authority");
        if (authority === "ROLE_USER1") {
            navigate("/homelessmypage");
        } else if (authority === "ROLE_USER2") {
            navigate("/farmmypage");
        } else {
            alert("로그인 후 이용해주세요.");
        }
    };

    /* 로그아웃 */
    const handleLogout = () => {
        // 로컬스토리지에서 토큰 및 유저 정보 삭제
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("authority");
        window.localStorage.removeItem("userId");
        setUserId("");

        alert("로그아웃이 완료되었습니다.")
        navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
    };

    /* 토큰 디코딩 함수 */
    function parseJwt(token) {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        return JSON.parse(jsonPayload);
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <LogoSearchContainer>
                    <LogoLink to="/">
                        <Logo />
                    </LogoLink>
                    <SearchCategoryWrapper>
                        <SearchBar />
                        <CategoryWrapper>
                            <CategoryItem to="/">구인글 보기</CategoryItem>
                            <CategoryItem to="/communitymain">커뮤니티</CategoryItem>
                            <CategoryItem as="div" onClick={handleMyPage}>내 정보</CategoryItem>
                        </CategoryWrapper>
                    </SearchCategoryWrapper>
                </LogoSearchContainer>
                {userId ? (
                    <LoginWrapper>
                        <span>{name} 님</span>
                        <span style={{margin: "0 0.7rem"}}>|</span>
                        <span 
                            onClick={handleLogout}
                            style={{cursor: "pointer"}}
                        >
                            로그아웃
                        </span>
                    </LoginWrapper>
                ) : (
                    <LoginWrapper>
                        <LoginBtn to="/login">로그인</LoginBtn>
                        <span style={{margin: "0 0.7rem"}}>|</span>
                        <LoginBtn to="/signin">회원가입</LoginBtn>
                    </LoginWrapper>
                )}
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 5px 8px -4px rgba(175, 191, 165, 0.5);
`;

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0 auto;
    padding: 1.5rem 0;
`;

const LogoSearchContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-left: 5rem;
`;

const LogoLink = styled(Link)`
    width: 10.5rem; 
    height: 3.5rem; 
`;

const SearchCategoryWrapper = styled.div`
    width: 65%;
    height: 100%
    display: flex;
    flex-direction: column;
`;

const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 1.5rem 0;
`;

const CategoryItem = styled(Link)`
    margin-right: 3rem;
    text-decoration: none;
    font-family: "Pretendard-SemiBold";
    font-size: 1.25rem;
    color: #6E6E6E;
    cursor: pointer; 
`;

const LoginWrapper = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    color: #6E6E6E;
    width: auto;
    height: 3.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 7rem;
`;

const LoginBtn = styled(Link)`
    text-decoration: none;
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    color: #6E6E6E;
`; 
