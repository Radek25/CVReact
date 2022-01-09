import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

interface INavBarData{
    isHamburgerMenuUsed: boolean;
    isHamburgerMenuOpen: boolean;
    isHamburgerMenuClose: boolean;
}

export const NavBarWrapper = styled.div<INavBarData>`
    width: 100vw;
    height: 50px;
    padding: 5px 50px;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.navbarBackgroundColor};
    z-index: 1;
    .burger-menu-btn{
        position: absolute;
        top: 10px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6vw;
        color: ${colors.mainFontColor};
        outline: none;
        border: none;
        ${(props) => props.isHamburgerMenuOpen === true? 'right: 20px;' : 'left: -40px;'}
        .fa-bars{
            display: ${(props) => props.isHamburgerMenuOpen === true ? 'none;' : 'flex;'}
            ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === false) ? 'animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both' : null}
        }
    }
    /*RWD max-width: 0px - 480px - BEGING*/
    @media (${widths.mobileLarge}){
        width: 180px;
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        padding: 60px 10px 10px;
        right: -180px;
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === true) ? 'animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: 0;': null}
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuClose === true) ? 'animation: slide-left-back 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: -180px;' : null}
    }
    /*RWD max-width: 0px - 480px - END/

    /*Animation - BEGIN*/
    @keyframes slide-left {
        0% {
            right: -180px;
        }
        100% {
            right: 0;
        }
    }
    @keyframes slide-left-back {
        0% {
            right: 0px;
        }
        100% {
            right: -180px;
        }
    }
    @keyframes scale-in-center {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    /*Animation - END*/
`;
export const NavBarLeftSideContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0 8px;
        color: ${colors.mainFontColor};
        font-size: 16px;
        letter-spacing: 1.5px;
    }
    /*RWD max-width: 0px - 480px - BEGING*/
    @media (${widths.mobileLarge}){
        min-width: 126px;
        min-height: 35px;
    }
    /*RWD max-width: 0px - 480px - END*/
`;