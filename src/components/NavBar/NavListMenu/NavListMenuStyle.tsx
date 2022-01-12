import styled from 'styled-components'
import { colors } from '../../../styledHelpers/colors'
import { widths } from '../../../styledHelpers/widths';

interface IPageNumber{
    pageIndex: number;
}

export const NavListMenuWrapper = styled.div<IPageNumber>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li{
        letter-spacing: 1px;
        display: block;
        color: #b4b4b47a;
        text-align: center;
        margin: 10px 25px;
        text-decoration: none;
        padding-bottom: 2px;
    }
    li:nth-child(${props => props.pageIndex+1}){ //Dadajemy 1 bo pageIndex liczony od 0 a krzystamy z nth-child
        color: ${colors.mainFontColor};
        border-bottom: 1.5px solid ${colors.mainYellowColor};
    }
    li:hover{
        cursor: pointer;
        color: ${colors.mainFontColor};
    }

    /*========================*/
    /*RWD 0px - 480px - BEGING*/
    /*========================*/
    @media (${widths.mobileMedium}){
        margin-top: 40px;
        li{
            font-size: 5vw;
        }
    }
    /*=====================*/
    /*RWD 0px - 480px - END*/
    /*=====================*/

    /*==========================*/
    /*RWD 481px - 760px - BEGING*/
    /*==========================*/
    @media (min-width: 481px) and (${widths.mobileLarge}){
        margin-top: 50px;
        li{
            font-size: 5vw;
        }
    }
    /*=======================*/
    /*RWD 481px - 760px - END*/
    /*=======================*/

    /*===========================*/
    /*RWD 761px - 1024px - BEGING*/
    /*===========================*/
    @media (min-width: 761px) and (${widths.tabletsSize}){
        margin-top: 55px;
        ul{
            flex-direction: column;
        }
        li{
            font-size: 4.5vw;
        }
    }
    /*========================*/
    /*RWD 761px - 1024px - END*/
    /*========================*/

    /*=========================*/
    /*RWD 0px - 1024px - BEGING*/
    /*=========================*/
    @media (min-width: 0px) and (${widths.tabletsSize}){
        min-height: 165px;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    /*======================*/
    /*RWD 0px - 1024px - END*/
    /*======================*/
`;