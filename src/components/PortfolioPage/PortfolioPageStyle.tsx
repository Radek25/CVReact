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
        ${(props) => props.isPageOne === true? 'animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;' : ''}
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
    ${(props) => props.isPageOne === true? 'animation: rotate-in-ver 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s both;' : ''}
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
`;