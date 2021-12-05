import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";

export const HomePageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 70px 20px;
    background-color: ${colors.mainBackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    .img-background{
        width: 320px;
        height: 320px;
        border-radius: 100%;
        background-color: #444444;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 300px;
        height: 300px;
        border-radius: 100%;
        animation: pulsate-fwd 2.5s ease-in-out infinite both;
    }
    @keyframes pulsate-fwd {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.01);
    }
    100% {
        transform: scale(1);
    }
    }
`;