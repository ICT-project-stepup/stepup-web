import { styled } from "styled-components";


export default function RoundWhiteBtn({
    text,
    style,
    onClick,
}) {
    return (
        <Button style={style} onClick={onClick}>
            {text}
        </Button>
    );
}

const Button = styled.div`
    position: absolute;

    // 버튼 꾸미기
    background: #ffffff;
    border-radius: 1.5625rem;

    font-size: 1.25rem;
    color: #6E6E6E;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    border: 0.1rem solid #AFBFA5;
    cursor: pointer;
`;