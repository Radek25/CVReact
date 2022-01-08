import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

interface IPortfolioPageData{
    isPageOne: boolean
    activeAppCard: number;
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

    /*RWD max-width: 360px - BEGING*/
    @media (${widths.mobileSmall}){
        padding: 35px 5px 15px;
    }
    /*RWD max-width: 360px - END*/
`;
export const AppsLogoWrapper = styled.div<IPortfolioPageData>`
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .app-logo{
        width: 250px;
        height: 250px;
        margin: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 0 20%;
        ${(props) => props.isPageOne === true? 'animation: rotate-in-ver 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1 5ms both;' : 'none'}
        .app-logo-text-icons-wrapper{
            width: 250px;
            height: 250px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            background-color: #111111ff;
            border-radius: 10px;
            position: absolute;
            color: ${colors.mainFontColor} ;
            opacity: 0;
            p{
                font-size: 14px;
                line-height: 1.8;
                text-align: center;
            }
            .icons-wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                text-align: center;
                font-size: 30px;
                i{
                    padding: 0 10px;
                }
                i:hover{
                    cursor: pointer;
                }
            }
        }
        .app-logo-text-icons-wrapper:hover{
            opacity: 1;
        }
    }
    .app-logo:hover{
        cursor: pointer;
    }

    /*RWD max-width: 360px - BEGING*/
    @media (${widths.mobileSmall}){
        width: 100%;
        max-height: 80vh;
        .app-logo{
            width: 45vw;
            height: 45vw;
            margin: 10px 5px;
            flex: 2 0 42%;
            .app-logo-text-icons-wrapper{
                width: 45vw;
                height: 45vw;
                padding: 5px;
                p{
                    font-size: 3.3vw;
                    line-height: 1.2;
                }
                i{
                    font-size: 6.5vw;
                }
            }
        }
    }
    /*RWD max-width: 360px - END*/

    /*Animations - BEGIN*/
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
    /*Animations - END*/
`;