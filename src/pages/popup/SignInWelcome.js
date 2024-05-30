import { styled } from "styled-components";

/* 채은 */
export default function SignInWelcome() {
    return(
        <Test>
            <span>회원가입 환영 알림</span>
        </Test>
    )
}

const Test = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    font-family: "Pretendard-Bold";
    font-size: 3rem;
    color: #8AA353;
`;
