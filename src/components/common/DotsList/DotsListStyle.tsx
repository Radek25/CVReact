import styled from "styled-components";
import { colors } from './../../../styledHelpers/colors';

interface IPageNumber{
    pageID: number;
}

export const DotsListWrapper = styled.div<IPageNumber>`
    position: fixed;
    height: 136px;
    top: 40%;
    right: 20px;
    text-align: center;
    @media (max-width: 480px){
        display: none;
        //Do przemyślenia czy mają być kropki czy nie!
        /* right: 85px;
        top: 80%;
        transform: rotate(270deg); */
    }
    ul{
        padding: 0;
        margin: 0;
    }
    li{
        list-style-type: none;
    }
    li:hover{
        cursor: pointer;
    }
    li:before{
        content: ' ';
        width: 10px;
        height: 10px;
        margin: 10px 0;
        display: inline-block;
        border-radius: 100%;
        background-color: #ffffff28;
    }
    li:nth-child(${props => props.pageID+1}):before{
        content: ' ';
        width: 10px;
        height: 10px;
        margin: 10px 0;
        display: inline-block;
        border-radius: 100%;
        background-color: ${colors.mainFontColor} !important;
        animation: scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*Animations - BEGIN*/
    @keyframes scale-in-center {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    /*Animations - END*/
`;