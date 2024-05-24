import { createGlobalStyle } from "styled-components";
import PretendardRegular from "./Pretendard-Regular.woff";
import PretendardBold from "./Pretendard-Bold.woff";


export default createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Regular";
        font-style: nomal;
        font-weight: 400;
        font-size: 1.25rem;
        font-display: swap;
        src: url(${PretendardRegular}) format("woff");
    }
    @font-face {
        font-family: "Pretendard-Bold";
        font-style: nomal;
        font-weight: 700;
        font-display: swap;
        src: url(${PretendardBold}) format("woff");
    }
`;