import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

interface INavBarData{
    isHamburgerMenuUsed: boolean;
    isHamburgerMenuOpen: boolean;
    isHamburgerMenuClose: boolean;
    pageWidth: number;
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
        font-size: 5.5vw;
        color: ${colors.mainFontColor};
        outline: none;
        border: none;
        ${(props) => props.isHamburgerMenuOpen === true? (props.pageWidth <=760? 'right: 10px;' : 'right: 25px;') : (props.pageWidth <=480? 'left: -40px;' : (props.pageWidth <=760? 'left: -50px;' : (props.pageWidth <=900? 'left: -80px;' : 'left: -95px;')))}
        .fa-bars{
            display: ${(props) => props.isHamburgerMenuOpen === true ? 'none;' : 'flex;'}
            ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === false) ? 'animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both' : null}
        }
    }

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        width: 180px;
        right: -180px;
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === true) ? 'animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: 0;': null}
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuClose === true) ? 'animation: slide-left-back 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: -180px;' : null}
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*========================*/
    /*RWD 481px - 760px - BEGING*/
    /*========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        width: 250px;
        right: -250px;
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === true) ? 'animation: slide-left-largeMobile 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: 0;': null}
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuClose === true) ? 'animation: slide-left-back-largeMobile 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: -250px;' : null}
    }
    /*=====================*/
    /*RWD 481px - 760px - END*/
    /*=====================*/

    /*===========================*/
    /*RWD 761px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        width: 380px;
        right: -380px;
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuOpen === true) ? 'animation: slide-left-tabletSize 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: 0;': null}
        ${(props) => (props.isHamburgerMenuUsed === true && props.isHamburgerMenuClose === true) ? 'animation: slide-left-back-tabletSize 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; right: -380px;' : null}
        .burger-menu-btn{
            top: 20px;
            font-size: 5vw;
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/

    /*=========================*/
    /*RWD 0px - 1024px - BEGING*/
    /*=========================*/
    @media (min-width: 0px) and (${widths.tabletsSize}){
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        padding: 60px 10px 10px;
    }
    /*======================*/
    /*RWD 0px - 1024px - END*/
    /*======================*/

    /*====================*/
    /* Animations - BEGIN */
    /*====================*/
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
    @keyframes slide-left-largeMobile {
        0% {
            right: -250px;
        }
        100% {
            right: 0;
        }
    }
    @keyframes slide-left-back-largeMobile {
        0% {
            right: 0px;
        }
        100% {
            right: -250px;
        }
    }
    @keyframes slide-left-tabletSize {
        0% {
            right: -380px;
        }
        100% {
            right: 0;
        }
    }
    @keyframes slide-left-back-tabletSize {
        0% {
            right: 0px;
        }
        100% {
            right: -380px;
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
    /*==================*/
    /* Animations - END */
    /*==================*/
`;
export const NavBarLeftSideContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar{
        font-size: 1.5vw;
    }
    span{
        margin: 0 8px;
        color: ${colors.mainFontColor};
        font-size: 16px;
        letter-spacing: 1.5px;
    }

/*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        .avatar{
            font-size: 5.5vw;
        }
        span{
            font-size: 18px;
        }
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*========================*/
    /*RWD 481px - 760px - BEGING*/
    /*========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        margin-top: 25px;
        .avatar{
            font-size: 6vw;
        }
        span{
            font-size: 26px;
            letter-spacing: 2px;
        }
    }
    /*=====================*/
    /*RWD 481px - 760px - END*/
    /*=====================*/

    /*===========================*/
    /*RWD 761px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        margin-top: 45px;
        .avatar{
            font-size: 4vw;
        }
        span{
            margin-left: 12px;
            font-size: 30px;
            letter-spacing: 3px;
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/
`;