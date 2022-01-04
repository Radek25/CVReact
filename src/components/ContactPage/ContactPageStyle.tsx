import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";

interface IContactWrapperData{
    isPageThree: boolean
}


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
        ${(props) => props.isPageThree === true ? 'animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.31s both' : 'none'};
    }
    .form-email-and-tel-input{
        width: 32vw;
        display: flex;
        justify-content: space-between;
        ${(props) => props.isPageThree === true ? 'animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.32s both' : 'none'};
        input{
            width: 15vw;
        }
    }
    textarea{
        width: 32vw;
        height: 20vh;
        resize: none;
        ${(props) => props.isPageThree === true ? 'animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.33s both' : 'none'};
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
`;