import styled from "styled-components";
import { widths } from "../../../styledHelpers/widths";
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

    /*========================*/
    /*RWD 0px - 1024px - BEGIN*/
    /*========================*/
    @media (${widths.tabletsSize}){
        display: none;
    }
    /*========================*/
    /*RWD 0px - 1024px - END*/
    /*========================*/

    /*==================*/
    /*Animations - BEGIN*/
    /*==================*/
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
    /*==================*/
    /*Animations - END*/
    /*==================*/
`;