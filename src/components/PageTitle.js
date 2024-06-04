import { styled } from "styled-components";


export default function PageTitle( {text} ) {
    return(
        <Title>
            <span>{text}</span>
        </Title>
    );
}

const Title = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 15rem;
    height: 2.375rem;
    background: #ffffff;
    border-left: 0.125rem solid #2b2b2b;
    font-family: "Pretendard-Medium";
    font-size: 2rem;
    line-height: 2.375rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 1.25rem;
    color: #2b2b2b;
`;