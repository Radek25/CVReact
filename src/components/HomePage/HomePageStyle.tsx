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
            letter-spacing: 3px;
            margin-bottom: 2px;
            animation: tracking-in-expand 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
        h4{
            letter-spacing: 1px;
            color: #5c5c5c;
            margin-top: 0px;
            animation: focus-in-expand 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        p{
            font-size: 15px;
            color: #dadada;
            margin-bottom: 25px;
        }
        span{
            color: ${colors.mainYellowColor};
        }
    }
    .cv-and-contact-buttons{
        button{
            width: 150px;
            height: 35px;
            border-radius: 20px;
            background-color: ${colors.mainYellowColor};
            letter-spacing: 1px;
            font-size: 15px;
            outline: none;
            font-weight: 550;
            border: 1.5px solid ${colors.mainYellowColor};
            margin-right: 15px;
            color: ${colors.mainFontColor};
        }
        button:hover{
            cursor: pointer;
            animation: btn-beat-animation 2s ease-in-out infinite both;
            /* animation: shake-bottom 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both; */
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
   
    @keyframes btn-beat-animation {
        from {
            transform: scale(1);
            transform-origin: center center;
            animation-timing-function: ease-out;
        }
        10% {
            transform: scale(0.91);
            animation-timing-function: ease-in;
        }
        17% {
            transform: scale(0.98);
            animation-timing-function: ease-out;
        }
        33% {
            transform: scale(0.87);
            animation-timing-function: ease-in;
        }
        45% {
            transform: scale(1);
            animation-timing-function: ease-out;
        }
    }
`;