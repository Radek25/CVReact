import styled from "styled-components";
import { colors } from './../../../styledHelpers/colors';

interface IOptionID{
    navOptionID : number;
}

export const DotsListWrapper = styled.div<IOptionID>`
    position: fixed;
    top: 40%;
    right: 20px;
    text-align: center;
    cursor: pointer;
    ul{
        padding: 0;
        margin: 0;
    }
    li{
        list-style-type: none;
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
    li:nth-child(${(props) => props.navOptionID}):before{
        background-color: ${colors.mainFontColor} !important;
    }
`;