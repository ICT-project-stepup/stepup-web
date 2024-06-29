import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { ReactComponent as BigLogo} from '../../../assets/BigLogo.svg';
import axios from "axios";


/* 채민 */
export default function LogIn() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    /* 로그인 버튼 클릭 시 로컬에 토큰 저장 */
    const handleLogin = async () => {
        try {
          const response = await axios
            .post("auth/login", {
              userId: userId,
              password: password,
            }, { "Content-Type": 'application/json', withCredentials: true });
          
            if(response.status === 200){                
                const accessToken = response.headers['authorization'].split(' ')[1];
                
                // localStorage에 토큰 값 저장
                window.localStorage.setItem("token", accessToken);
            }
            alert("로그인이 완료되었습니다.");
            navigate("/");  // 홈 화면으로 이동
            window.location.reload();
          } catch (error) {
          alert("로그인 에러: 정보를 다시 확인해주세요.");
        }
    }

    return(
        <LoginPageContainer>
            <PageTitle text="로그인" />
            <LoginWrapper>
                <BigLogo
                    width={'12.625rem'} height={'4.188rem'}
                />
                <LoginInputWrapper>
                <IdPasswordInput
                        placeholder="아이디"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <IdPasswordInput
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </LoginInputWrapper>
                <LoginBtn  onClick={() => handleLogin()}>로그인</LoginBtn>
            </LoginWrapper>
        </LoginPageContainer>
    )
}

const LoginPageContainer = styled.div`
    width: auto;
    height: 52rem;
    display: block;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;

const LoginWrapper = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
`;

const LoginInputWrapper = styled.div`
    width: 24.5rem;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2.5rem;
`;

const IdPasswordInput = styled.input`
    height: 3.75rem;
    font-family: Pretendard-Medium;
    font-size: 1.375rem;
    border: 0.13rem solid #AFBFA5;
    border-radius: 1.25rem;
    padding: 0 1.5rem;

    &::placeholder {
        color: #AFBFA5;
    }
    &:focus {
        outline: none;
        border: 0.13rem solid #AFBFA5;
        color: #6E6E6E;
    }
`;

const LoginBtn = styled.button`
    width: 24.5rem;
    height: 3.75rem;
    font-family: Pretendard-SemiBold;
    font-size: 1.375rem;
    border-radius: 1.25rem;
    background: #8AA353;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
`;
