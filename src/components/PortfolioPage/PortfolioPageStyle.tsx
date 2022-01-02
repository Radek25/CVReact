import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";

interface IAppCardsData{
    index: number;
    name: string;
    isPageOne: boolean
}
interface IAppBtnData{
    isPageOne: boolean
}

export const PortfolioPageWrapper = styled.div<IAppBtnData>`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 70px 20px;
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
`;
export const AppCard = styled.div<IAppCardsData>`
    width: 230px;
    height: 265px;
    margin: 0 15px;
    border-radius: 10px;
    background-color: ${colors.mainYellowColor};
    background-image: url(${props => props.name});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    ${(props) => props.isPageOne === true? 'animation: rotate-in-ver 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1 5ms both;' : 'none'}
    .shadow-card{
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        opacity: 0;
        p{
            margin: 0;
            padding: 15px 10px;
            color: ${colors.mainFontColor};
            text-align: center;
        }
        span{
            width: 100%;
            padding: 5px 20px;
            box-sizing: border-box;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center:
        }
        i{
            margin: 0 15px;
            color: ${colors.mainFontColor};
        }
        i:hover{
            cursor: pointer;
        }
    }
    .shadow-card:hover{
        animation: flip-in-ver-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        background-color: #111111dc;
        opacity: 1;
        cursor: default;
    }
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
    @keyframes flip-in-ver-right {
        0% {
            transform: rotateY(-80deg);
            opacity: 0;
        }
        100% {
            transform: rotateY(0);
            opacity: 1;
        }
    }
`;