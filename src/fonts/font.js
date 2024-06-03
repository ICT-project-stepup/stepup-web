import { createGlobalStyle } from "styled-components";
import PretendardRegular from "./Pretendard-Regular.woff";
import PretendardBold from "./Pretendard-Bold.woff";
import PretendardSemiBold from "./Pretendard-SemiBold.woff";
import PretendardMedium from "./Pretendard-Medium.woff";
import InterMedium from "./Inter-Medium.ttf";


export default createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Regular";
        font-style: nomal;
        font-weight: 400;
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
    @font-face {
        font-family: "Pretendard-SemiBold";
        font-style: nomal;
        font-weight: 600;
        font-display: swap;
        src: url(${PretendardSemiBold}) format("woff");
    }
    @font-face {
        font-family: "Pretendard-Medium";
        font-style: nomal;
        font-weight: 500;
        font-display: swap;
        src: url(${PretendardMedium}) format("woff");
    }
    @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${InterMedium}) format("ttf");
    }
`;