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
        flex: 1 0 21%;
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
    
    /*RWD max-width: 360px - BEGING*/
    @media (${widths.mobileSmall}){
        padding: 30px 5px 10px;
        .percentWrapper{
            top: 35px;
            font-size: 16px;
        }
        .nameWrapper{
            font-size: 14px;
        }
        img{
            width: 35px;
            height: 35px;
            top: 60px;
        }
    }
    /*RWD max-width: 360px - END*/
    /*RWD max-width: 480px - BEGING*/
    @media (min-width: 361px) and (${widths.mobileMedium}){
        padding: 30px 5px 10px;
        .percentWrapper{
            top: 40px;
            font-size: 16px;
        }
        .nameWrapper{
            font-size: 14px;
        }
        img{
            width: 45px;
            height: 45px;
            top: 65px;
        }
    }
    /*RWD max-width: 480px - END*/
`;