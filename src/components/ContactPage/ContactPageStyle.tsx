import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";
import {keyframes} from 'styled-components';

interface IContactWrapperData{
    isPageThree: boolean;
}

const slideInLeft = keyframes`
    0% {transform: translateX(-1000px);opacity: 0;}
    100% {transform: translateX(0);opacity: 1;}
`
const slideInRight = keyframes`
    0% {transform: translateX(1000px);opacity: 0;}
    100% {transform: translateX(0);opacity: 1;}
`

export const ContactPageWrapper = styled.div<IContactWrapperData>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 70px 20px;
    background-color: ${colors.mainBackgroundColor};
    position: relative;
    font-family: 'Roboto', sans-serif;
    span{
        display: flex;
        align-items: center;
        font-size: 22px;
        color: ${colors.mainFontColor};
        ${(props) => props.isPageThree === true ? ('animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.3s both') : 'none'};
        i{
            margin: 0 10px;
            ${(props) => props.isPageThree === true ? 'animation: jello-horizontal 0.9s 1.2s both' : 'none'};
        }
    }
    form{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
    }
    input, textarea{
        background-color: ${colors.formInputColor};
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        box-sizing: border-box;
        color: ${colors.mainFontColor};
        font-size: 14px;
    }
    input{
        height: 32px;
    }
    label{
        margin: 10px 0;
    }
    .form-name-input{
        width: 32vw;
        animation-name: ${(props) => props.isPageThree === true ? slideInLeft : 'none'};
        animation-duration: 0.5s;
        animation-delay: 0.31s;
        animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    .form-email-and-tel-input{
        width: 32vw;
        display: flex;
        justify-content: space-between;
        animation-name: ${(props) => props.isPageThree === true ? slideInRight : 'none'};
        animation-duration: 0.5s;
        animation-delay: 0.32s;
        animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
        input{
            width: 15vw;
        }
    }
    textarea{
        width: 32vw;
        height: 20vh;
        resize: none;
        animation-name: ${(props) => props.isPageThree === true ? slideInLeft : 'none'};
        animation-duration: 0.5s;
        animation-delay: 0.33s;
        animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    .form-submit-input{
        width: 120px;
        margin: 10px;
        padding: 5px;
        font-size: 18px;
        background-color: ${colors.mainYellowColor};
        ${(props) => props.isPageThree === true ? 'animation: slide-in-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.35s both' : 'none'};
    }
    .form-submit-input:hover{
        cursor: pointer;
    }
    .modal-send-msg{
        width: 200px;
        padding: 8px 15px;
        position: absolute;
        top: -3000px;
        right: 20px;
        z-index: 1000;
        background-color: #5cb85c;
        color: #ffffff;
        text-align: center;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    .modal-send-msg.show-modal{
        animation: slide-in-modal 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        padding: 30px 10px 10px;
        .form-name-input{
            width: 90vw;
        }
        .form-email-and-tel-input{
            width: 90vw;
            input{
                width: 40vw;
            }
        }
        textarea{
            width: 90vw;
        }

        .modal-send-msg{
            width: 55vw;
            left: 20px;
            padding: 5px 9px;
            font-size: 5vw;
        }
        .modal-send-msg.show-modal{
            animation: slide-in-modal-mobile 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*===========================*/
    /*RWD 481px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 481px) and (${widths.tabletsSize}){
        padding: 30px 10px 10px;
        span{
            font-size: 50px;
            margin-bottom: 20px;
        }
        label{
            margin: 15px 0;
        }
        input, textarea{
            font-size: 22px;
        }
        input{
            height: 50px;
        }
        .form-name-input{
            width: 80vw;
        }
        .form-email-and-tel-input{
            width: 80vw;
            input{
                width: 35vw;
            }
        }
        textarea{
            width: 80vw;
        }
        .form-submit-input{
            width: 200px;
            height: 60px;
            font-size: 30px;
        }
        
        .modal-send-msg{
            width: 40vw;
            left: 30px;
            padding: 10px 15px;
            font-size: 3.5vw;
        }
        .modal-send-msg.show-modal{
            animation: slide-in-modal-mobile 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
    /*========================*/
    /*RWD 481px - 1024px - END*/
    /*========================*/

    /*====================*/
    /* Animations - BEGIN */
    /*====================*/
    @keyframes tracking-in-contract {
        0% {
            letter-spacing: 1em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    }
    @keyframes jello-horizontal {
        0% {
            transform: scale3d(1, 1, 1);
        }
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            transform: scale3d(1, 1, 1);
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
    @keyframes slide-in-left {
        0% {
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-right {
        0% {
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-bottom {
        0% {
            transform: translateY(1000px);
            opacity: 0;
        }
        70%{
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-modal-mobile {
        0% {
            opacity: 0.7;
        }
        100% {
            top: 30px;
            opacity: 1;
        }
    }
    @keyframes slide-in-modal {
        0% {
            opacity: 0.7;
        }
        100% {
            top: 60px;
            opacity: 1;
        }
    }
    /*==================*/
    /* Animations - END */
    /*==================*/
`;