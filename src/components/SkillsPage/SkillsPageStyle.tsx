import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";
import { widths } from "../../styledHelpers/widths";

interface ISkillPageData{
    isPageTwo: boolean;
}

export const SkillsPageWrapper = styled.div<ISkillPageData>`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 70px 50px;
    background-color: ${colors.mainBackgroundColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    .progress-bars{
        flex-basis: 21%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    span{
        position: absolute;
        float: center;
        color: ${colors.mainFontColor};
    }
    .percentWrapper{
        top: 45px;
        text-align: center;
        font-size: 18px;
    }
    .nameWrapper{
        bottom: 10px;
        font-size: 18px;
    }
    img{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 75px;
        float: center;
    }
    
    /*========================*/
    /*RWD 0px - 360px - BEGING*/
    /*========================*/
    @media (${widths.mobileSmall}){
        padding: 30px 5px 10px;
        .percentWrapper{
            top: 32px;
            font-size: 14px;
        }
        .nameWrapper{
            font-size: 12px;
        }
        img{
            width: 35px;
            height: 35px;
            top: 52px;
        }
    }
    /*=====================*/
    /*RWD 0px - 360px - END*/
    /*=====================*/

    /*=========================*/
    /*RWD 361px - 480px - BEGIN*/
    /*=========================*/
    @media (min-width: 361px) and (${widths.mobileMedium}){
        padding: 30px 5px 10px;
        .percentWrapper{
            top: 34px;
            font-size: 18px;
        }
        .nameWrapper{
            font-size: 16px;
        }
        img{
            width: 45px;
            height: 45px;
            top: 60px;
        }
    }
    /*=======================*/
    /*RWD 361px - 480px - END*/
    /*=======================*/
   
    /*=========================*/
    /*RWD 481px - 760px - BEGIN*/
    /*=========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        padding: 40px 5px 10px;
        .percentWrapper{
            top: 36px;
            font-size: 20px;
        }
        .nameWrapper{
            font-size: 18px;
        }
        img{
            width: 50px;
            height: 50px;
            top: 70px;
        }
    }
    /*=======================*/
    /*RWD 481px - 760px - END*/
    /*=======================*/

    /*==========================*/
    /*RWD 761px - 1024px - BEGIN*/
    /*==========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        padding: 55px 5px 10px;
        .percentWrapper{
            top: 40px;
            font-size: 28px;
        }
        .nameWrapper{
            font-size: 26px;
        }
        img{
            width: 70px;
            height: 70px;
            top: 85px;
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/

    /*========================*/
    /*RWD 0px - 124px - BEGING*/
    /*========================*/
    @media (${widths.tabletsSize}){
        .nameWrapper{
            bottom: 5px;
        }
        .progress-bars{
            flex-basis: 40%;
        }
    }
    /*=====================*/
    /*RWD 0px - 1240px - END*/
    /*=====================*/
`;