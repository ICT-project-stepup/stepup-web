import { styled } from "styled-components";

/* 예은 */
export default function ShowApplicant() {
    return(
        <Test>
            <span>지원자 현황 - 농가</span>
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