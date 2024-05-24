import { styled } from "styled-components";
import { ReactComponent as Logo} from '../../assets/Logo.svg';
import SearchBar from "./SearchBar";


export default function Header() {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <LogoSearchContainer>
                    <Logo />
                    <SearchCategoryWrapper>
                        <SearchBar />
                        <CategoryWrapper>
                            <CategoryItem>구인글 보기</CategoryItem>
                            <CategoryItem>커뮤니티</CategoryItem>
                            <CategoryItem>내 정보</CategoryItem>
                        </CategoryWrapper>
                    </SearchCategoryWrapper>
                </LogoSearchContainer>

                <LoginWrapper>
                    <span>
                        로그인
                    </span>
                    <span>
                        |
                    </span>
                    <span>
                        회원가입
                    </span>
                </LoginWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 1000;
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

const SearchCategoryWrapper = styled.div`
    width: 65%;
    height: 100%
    display: flex;
    flex-direction: column;
`;

const CategoryWrapper = styled.div`
    font-family: "Pretendard-SemiBold";
    font-size: 1.25rem;
    color: #6E6E6E;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 1.5rem 0;
`;

const CategoryItem = styled.span`
    margin-right: 3rem;
`;

const LoginWrapper = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    color: #6E6E6E;
    width: 10rem;
    height: 3.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 7rem;
`;
