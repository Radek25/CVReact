import styled from "styled-components";
import { colors } from './../../../styledHelpers/colors';

export const SocialMediaWrapper = styled.div`
    position: absolute;
    top: 95%;
    right: 10px;
    i{
        font-size: 22px;
        margin: 0 8px;
        color: ${colors.mainFontColor};
    }
    i:hover{
        cursor: pointer;
        transform: scale(1.2);
        border: none;
        outline: none;
        color: ${colors.mainYellowColor};
    }
    /* .fa-facebook:hover{
        color: ${colors.facebookLogoColor};
        background-color: #ffffff;
        border-radius: 100%;
    }
    .fa-facebook-messenger:hover{
        color: ${colors.messengerLogoColor};
        background-color: #ffffff;
        border-radius: 100%;
    }
    .fa-github:hover{
        color: #6cc644;
    }
    .fa-linkedin:hover{
        color: ${colors.linkedinLogoColor};
        background-color: #ffffff;
        border-radius: 5px;
    } */
`;