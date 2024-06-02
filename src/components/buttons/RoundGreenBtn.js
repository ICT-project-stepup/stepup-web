import { styled } from "styled-components";


export default function RoundGreenBtn({
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
    background: #8aa353;
    border-radius: 1.5625rem;

    font-size: 1.25rem;
    color: #ffffff;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    border: none;
    cursor: pointer;
`;