import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";

export const NavBarWrapper = styled.div`
    width: 100vw;
    height: 50px;
    padding: 5px 50px;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.navbarBackgroundColor};
    z-index: 1000;
`;
export const NavBarLeftSideContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0 8px;
        color: ${colors.mainFontColor};
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        letter-spacing: 1.5px;
    }
`;