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
        width: 325px;
        height: 325px;
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
        animation: pulsate-fwd 2s ease-in-out 0.8s infinite both;
    }
    .about-me-description{
        width: 550px;
        margin: 0 10px 0 50px;
        font-family: 'Roboto', sans-serif;
        h1{
            font-size: 50px;
            color: ${colors.mainFontColor};
            letter-spacing: 2px;
            margin-bottom: 5px;
            animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
        h4{
            color: #5c5c5c;
            margin-top: 0px;
            animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        p{
            font-size: 15px;
            color: #7c7c7c;
        }
        span{
            color: ${colors.mainYellowColor};
        }
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
    @keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes focus-in-expand {
        0% {
            letter-spacing: -0.5em;
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            filter: blur(0px);
            opacity: 1;
        }
    }
`;