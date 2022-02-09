import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

interface IPortfolioPageData{
    isPageOne: boolean;
    activeModal: boolean;
}

export const PortfolioPageWrapper = styled.div<IPortfolioPageData>`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 70px 50px;
    background-color: ${colors.mainBackgroundColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .github-btn-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .github-btn-wrapper:hover{
        animation: btn-beat-animation 2s ease-in-out infinite both;
    }
    button{
        width: 200px;
        height: 40px;
        padding: 2px 5px;
        background-color: ${colors.mainYellowColor};
        color: ${colors.mainFontColor};
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: 550;
        letter-spacing: 1px;
        ${(props) => props.isPageOne === true? 'animation: slide-in-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;' : 'none'}
    }
    button:hover{
        cursor: pointer;
    }
    .shadow-modal-wrapper{
        position: absolute;
        z-index: 5;
        width: 100vw;
        height: 100vh;
        background-color: #111111fa;
        ${(props) => props.activeModal? 'display: flex;' : 'display: none;'}
        justify-content: center;
        align-items: center;
        .modal-message{
            width: 40vw;
            box-sizing: border-box;
            padding: 40px 10px 20px;
            position: relative;
            background-color: #111111;
            border-radius: 10px;
            border: 2px solid ${colors.mainFontColor};
            .fa-times{
                position: absolute;
                top: 10px;
                right: 15px;
                color: ${colors.mainFontColor};
                font-size: 20px;
                cursor: pointer;
            }
            p{
                color: ${colors.mainFontColor};
                font-size: 16px;
                text-align: center;
            }
            span{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 55px;
                    height: 55px;
                    margin: 0 5px;
                }
            }
        }
    }

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        padding: 35px 5px 15px;
        .shadow-modal-wrapper{
            .modal-message{
                width: 90vw;
                padding: 30px 15px 20px;
                .fa-times{
                    top: 5px;
                    right: 10px;
                    font-size: 6vw;
                }
                p{
                    font-size: 16px;
                }
                span{
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
    /*======================*/
    /*RWD: 0px - 480px - END*/
    /*======================*/

    /*==========================*/
    /*RWD 481px - 760px - BEGING*/
    /*==========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        padding: 35px 5px 15px;
        .shadow-modal-wrapper{
            .modal-message{
                width: 90vw;
                padding: 50px 20px 20px;
                .fa-times{
                    top: 15px;
                    right: 20px;
                    font-size: 5.5vw;
                }
                p{
                    font-size: 24px;
                }
                span{
                    img{
                        width: 70px;
                        height: 70px;
                        margin: 0 10px;
                    }
                }
            }
        }
        button{
            width: 42vw;
            height: 10vw;
            font-size: 3vw;
        }
    }
    /*========================*/
    /*RWD: 481px - 760px - END*/
    /*========================*/

    /*===========================*/
    /*RWD 761px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        .shadow-modal-wrapper{
            .modal-message{
                width: 80vw;
                padding: 70px 30px 20px;
                .fa-times{
                    top: 15px;
                    right: 20px;
                    font-size: 4.5vw;
                }
                p{
                    font-size: 28px;
                }
                span{
                    img{
                        width: 80px;
                        height: 80px;
                        margin: 0 10px;
                    }
                }
            }
        }
        button{
            width: 42vw;
            height: 10vw;
            font-size: 3vw;
        }
    }
    /*=========================*/
    /*RWD: 761px - 1024px - END*/
    /*=========================*/

    /*=========================*/
    /*RWD 0px - 1024px - BEGING*/
    /*=========================*/
    @media (${widths.tabletsSize}){
        button{
            animation: btn-beat-animation 2s ease-in-out infinite both;
        }
    }   
    /*======================*/
    /*RWD 0px - 1024px - END*/
    /*======================*/
`;

export const AppsLogoWrapper = styled.div<IPortfolioPageData>`
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .app-logo{
        width: 18vw;
        height: 18vw;
        margin: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-basis: 20%;
        ${(props) => props.isPageOne === true? 'animation: rotate-in-ver 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1 5ms both;' : 'none'}
        .app-logo-icons-wrapper{
            width: 18vw;
            height: 18vw;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            background-color: #111111ff;
            border-radius: 10px;
            position: absolute;
            color: ${colors.mainFontColor} ;
            opacity: 0;
            a{
                color: ${colors.mainFontColor};
            }
            .hide-icon-on-mobile{
                display: none;
            }
            .show-icon-on-mobile{
                animation: show-icon 2s 1 1ms both;
            }
            .fa-info-circle, .fa-play-circle, .fa-github{
                cursor: pointer;
            }
            .fa-info-circle{
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 20px;
            }
            .fa-play-circle, .fa-github{
                margin: 10px;
                font-size: 50px;
            }
        }
        .app-logo-icons-wrapper:hover{
            opacity: 1;
        }
    }

    /*=========================*/
    /*RWD 0px - 1024px - BEGING*/
    /*=========================*/
    @media (${widths.tabletsSize}){
        .app-logo{
            width: 36vw;
            height: 36vw;
            flex-basis: 36vw;
            .app-logo-icons-wrapper, .app-logo-icons-wrapper-moblie{
                width: 36vw;
                height: 36vw;
                padding: 2px 2px 5px;
                .fa-info-circle{
                    top: 1.5vw;
                    right: 1.5vw;
                    font-size: 5vw;
                }
                .fa-play-circle, .fa-github{
                    font-size: 10vw;
                }
            }
        }
    }   
    /*======================*/
    /*RWD 0px - 1024px - END*/
    /*======================*/

    /*====================*/
    /* Animations - BEGIN */
    /*====================*/
    @keyframes rotate-in-ver {
        0% {
            transform: rotateY(-180deg);
            opacity: 0;
        }
        50%{
            opacity: 0;
        }
        100% {
            transform: rotateY(0deg);
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
    @keyframes show-icon {
        0% {
            display: none;
        }
        100% {
            display: flex;
        }
    }
    /*==================*/
    /* Animations - END */
    /*==================*/
`;