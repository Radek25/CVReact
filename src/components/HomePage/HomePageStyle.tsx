import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

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
        width: 25vw;
        height: 25vw;
        border-radius: 100%;
        background-color: #444444;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 24vw;
        height: 24vw;
        border-radius: 100%;
        animation: pulsate-fwd 2s ease-in-out 0.8s infinite both;
    }
    .about-me-description{
        width: 45vw;
        margin: 0 10px 0 50px;
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
            font-size: 16px;
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
        } 
    }
    /*RWD max-width: 360px - BEGING*/
    @media (${widths.mobileSmall}){
        padding: 20px 10px 15px;
        flex-direction: column;
    }
    .img-background{
        @media (${widths.mobileSmall}){
            width: 59vw;
            height: 59vw;
        }
    }
    img{
        @media (${widths.mobileSmall}){
            width: 56vw;
            height: 56vw;
        }
    }
    .about-me-description{
        @media (${widths.mobileSmall}){
            width: 90vw;
            margin: 10px 0;
            text-align: center;
        }
        h1{
            @media (${widths.mobileSmall}){
                font-size: 35px;
            }
        }
        h4{
            @media (${widths.mobileSmall}){
                font-size: 18px;
                margin-bottom: 15px;
            }
        }
        p{
            @media (${widths.mobileSmall}){
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }
    .cv-and-contact-buttons{
        @media (${widths.mobileSmall}){
            display: flex;
            justify-content: center;
            align-items: center;
        }
        button{
            @media (${widths.mobileSmall}){
                width: 100px;
                height: 30px;
                font-weight: 300;
                margin: 0 10px;
            }
        }
    }
    /*RWD max-width: 360px - END*/

    /* Animations - BEGIN */
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
    /* Animations - END */
`;