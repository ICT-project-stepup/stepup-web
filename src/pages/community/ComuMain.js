import { styled } from "styled-components";

/* 채민 */
export default function ComuMain() {
    return(
        <Test>
            <span>커뮤니티 메인 페이지</span>
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