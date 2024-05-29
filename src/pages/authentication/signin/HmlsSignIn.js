import { styled } from "styled-components";

/* 예은 */
export default function HmlsSignIn() {
    return(
        <Test>
            <span>회원가입 - 노숙인</span>
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