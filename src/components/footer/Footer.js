import { styled } from "styled-components";
import { ReactComponent as Logo} from '../../assets/Logo.svg';


export default function Footer() {
    return(
        <FooterContainer>
            <NavWrapper>
                <CategoryWrapper>
                    <NavTitle>스텝업</NavTitle>
                    <NavContent>
                        <Item>스텝업 소개</Item>
                    </NavContent>
                </CategoryWrapper>
                <CategoryWrapper>
                    <NavTitle>고객센터</NavTitle>
                    <NavContent>
                        <Item>공지사항</Item>
                        <Item>자주 묻는 질문</Item>
                    </NavContent>
                </CategoryWrapper>
                <CategoryWrapper>
                    <NavTitle>한발짝두발짝</NavTitle>
                    <NavContent>
                        <Item>한발짝두발짝 소개</Item>
                        <Item>지원하기</Item>
                    </NavContent>
                </CategoryWrapper>
            </NavWrapper>
            <BottomWrapper>
                <Logo />
                <CopyrightWrapper>
                    <TermsWrapper>
                        <span>개인정보처리방침</span>
                        <span style={{margin: "0 1rem 0 1rem"}}>|</span>
                        <span>이용약관</span>
                    </TermsWrapper>
                    <Copyright>©ONESTEPTWOSTEP. ALL RIGHTS RESERVED</Copyright>
                </CopyrightWrapper>
            </BottomWrapper>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #E4ECD1;
    margin-top: auto;
`;

const NavWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    padding: 2rem 2rem 0 2rem;
`;

const CategoryWrapper = styled.div`
    width: 14%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

const NavTitle = styled.span`
    font-family: "Pretendard-SemiBold";
    font-size: 1.25rem;
    color: #6E6E6E;
    margin-bottom: 0.7rem;
`;

const NavContent = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    color: #6E6E6E;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Item = styled.span`
    margin-bottom: 0.3rem;
`;

const BottomWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 2rem 1rem 2rem;
`;

const CopyrightWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const TermsWrapper = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 1.188rem;
    color: #6E6E6E;
    display: flex;
    justify-content: start;
    margin-bottom: 0.3rem;
`;

const Copyright = styled.span`
    font-family: "Pretendard-Regular";
    font-size: 1.188rem;
    color: #6E6E6E;
    display: flex;
    justify-content: start;
`;