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
    /*RWD max-width: 0px - 480px - BEGING*/
    @media (${widths.mobileLarge}){
        min-height: 165px;
        flex-direction: column;
        margin-top: 40px;
        li{
            font-size: 5vw;
        }
    }
    /*RWD max-width: 0px - 480px - END*/
`;