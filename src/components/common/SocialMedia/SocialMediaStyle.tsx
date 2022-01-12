import styled from "styled-components";
import { colors } from './../../../styledHelpers/colors';
import { widths } from "../../../styledHelpers/widths";

export const SocialMediaWrapper = styled.div`
    position: absolute;
    top: 95%;
    right: 15px;
    z-index: 1;
    animation: slide-in-blurred-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) 2.2s both;
    i{
        margin: 0 7px;
        font-size: 22px;
        color: ${colors.mainFontColor};
        position: relative;
    }
    i:hover{
        cursor: pointer;
        transform: scale(1.2);
        border: none;
        outline: none;
    }
    i:hover:after{
        content: '';
        background-color: #ffffff;
        position: absolute;
        z-index: -1;
    }
    .fa-facebook:hover{
        color: ${colors.facebookLogoColor};
    }
    .fa-facebook:hover:after{
        width: 20px;
        height: 20px;
        bottom: 0;
        left: 1px;
        border-radius: 100%;
    }
    .fa-facebook-messenger:hover{
        color: ${colors.messengerLogoColor};
    }
    .fa-facebook-messenger:hover:after{
        width: 20px;
        height: 20px;
        bottom: 1px;
        left: 1px;
        border-radius: 100%;
    }
    .fa-github:hover{
        color: ${colors.githubLogoColor};
    }
    .fa-linkedin:hover{
        color: ${colors.linkedinLogoColor};
    }
    .fa-linkedin:hover:after{
        border-radius: 0px;
        width: 16px;
        height: 16px;
        top: 2px;
        left: 1px;
    }

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        i{
            font-size: 26px;
        }
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*==========================*/
    /*RWD 481px - 760px - BEGING*/
    /*==========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        i{
            font-size: 35px;
        }
    }
    /*=======================*/
    /*RWD 481px - 760px - END*/
    /*=======================*/

    /*===========================*/
    /*RWD 761px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        padding: 0 30px !important;
        i{
            font-size: 44px;
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/

    /*=========================*/
    /*RWD 0px - 1024px - BEGING*/
    /*=========================*/
    @media (min-width: 0px) and (${widths.tabletsSize}){
        top: 93%;
        left: 0; 
        right: 0; 
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        animation: none;
        i:after{
            content: '';
            background-color: #ffffff;
            position: absolute;
            z-index: -1;
        }
        .fa-facebook{
            color: ${colors.facebookLogoColor};
        }
        .fa-facebook:after{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            left: 0;
            border-radius: 100%;
            border: 3px solid ${colors.facebookLogoColor};
        }
        .fa-facebook-messenger{
            color: ${colors.messengerLogoColor};
        }
        .fa-facebook-messenger:after{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            left: 0;
            border-radius: 100%;
            border: 3px solid ${colors.messengerLogoColor};
        }
        .fa-github{
            color: ${colors.githubLogoColor};
        }
        .fa-linkedin{
            color: ${colors.linkedinLogoColor};
        }
        .fa-linkedin:after{
            border-radius: 0px;
            width: 90%;
            height: 80%;
            box-sizing: border-box;
            border: 3px solid ${colors.linkedinLogoColor};
            top: 2px;
            left: 1px;
        }
    }
    /*======================*/
    /*RWD 0px - 1024px - END*/
    /*======================*/

    /*====================*/
    /* Animations - BEGIN */
    /*====================*/
    @keyframes slide-in-blurred-right {
        0% {
            transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
            transform-origin: 0% 50%;
            opacity: 0;
        }
        100% {
            transform: translateX(0) scaleY(1) scaleX(1);
            transform-origin: 50% 50%;
            opacity: 1;
        }
    }
    /*==================*/
    /* Animations - END */
    /*==================*/
`;