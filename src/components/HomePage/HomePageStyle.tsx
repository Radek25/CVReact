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
            font-size: 20px;
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
            width: 180px;
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

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        padding: 20px 10px 15px;
        flex-direction: column;
        .img-background{
            width: 59vw;
            height: 59vw;
        }
        img{
            width: 56vw;
            height: 56vw;
        }
        .about-me-description{
            width: 90vw;
            margin: 10px 0;
            text-align: center;
            h1{
                font-size: 30px;
            }
            h4{
                font-size: 16px;
                margin-bottom: 5px;
            }
            p{
                font-size: 14px;
                margin-top: 10px;
                line-height: 1.4;
            }
        }
        .cv-and-contact-buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 120px;
                height: 35px;
                font-weight: 400;
                font-size: 16px;
                margin: 0 10px;
            }
        }
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*=========================*/
    /*RWD 481px - 760px - BEGIN*/
    /*=========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        padding: 30px 10px 10px;
        flex-direction: column;
        .img-background{
            width: 45vw;
            height: 45vw;
        }
        img{
            width: 42vw;
            height: 42vw;
        }
        .about-me-description{
            width: 70vw;
            margin: 5px 0;
            text-align: center;
            h1{
                font-size: 44px;
                margin-top: 10px;
            }
            h4{
                font-size: 20px;
                margin-bottom: 15px;
            }
            p{
                font-size: 16px;
                margin-top: 10px;
                line-height: 1.4;
            }
        }
        .cv-and-contact-buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 130px;
                height: 35px;
                font-weight: 400;
                font-size: 18px;
                margin: 0 10px;
            }
        }
    }
    /*=======================*/
    /*RWD 481px - 760px - END*/
    /*=======================*/
   
    /*==========================*/
    /*RWD 761px - 1024px - BEGIN*/
    /*==========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        padding: 40px 10px 10px;
        flex-direction: column;
        .img-background{
            width: 40vw;
            height: 40vw;
        }
        img{
            width: 37vw;
            height: 37vw;
        }
        .about-me-description{
            width: 80vw;
            margin: 10px 0;
            text-align: center;
            h1{
                font-size: 60px;
                margin-top: 10px;
            }
            h4{
                font-size: 32px;
                margin-bottom: 15px;
            }
            p{
                font-size: 25px;
                margin-top: 10px;
                line-height: 1.6;
            }
        }
        .cv-and-contact-buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 30vw;
                height: 7vw;
                font-weight: 550;
                font-size: 20px;
                margin: 0 20px;
            }
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/

    /*====================*/
    /* Animations - BEGIN */
    /*====================*/
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
    /*==================*/
    /* Animations - END */
    /*==================*/
`;