import styled from "styled-components";
import { colors } from "../../../styledHelpers/colors";

interface IAutoTextData{
    width: number;
    letterSpacing: number;
    duration: number;
    stepsNumber: number;
    color: string;
}

export const AutoTypeWrapper = styled.div<IAutoTextData>`
    margin-left: 50px;
    h1{
        /* width: max-content; */
        min-width: ${(props) => props.width + 'px'};
        position: relative;
        color: ${(props) => props.color};
        font-family: 'Roboto', sans-serif;
        font-size: 45px;
        letter-spacing: ${(props) => props.letterSpacing + 'px'};
    }
    h1:before, h1:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    h1:before{
        background-color: ${colors.mainBackgroundColor};
        animation: typeWriter ${(props) => props.duration + 's'} steps(${(props) => props.stepsNumber}) 20ms forwards;
    }
    /* h1:after{
        width: 1.5px;
        background: ${colors.mainFontColor};
        animation: 
            typeWriter ${(props) => props.duration + 's'} steps(${(props) => props.stepsNumber}) 20ms forwards,
            blink 1s steps(5) infinite;
    } */
    @keyframes typeWriter{
        to{
            left: 100%;
        }
    }
    @keyframes blink{
        to{
            background: ${colors.mainBackgroundColor};
        }
    }
`;
