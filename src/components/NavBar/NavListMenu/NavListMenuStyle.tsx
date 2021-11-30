import styled from 'styled-components'
import { colors } from '../../../styledHelpers/colors'

interface IContentID{
    contentId: number;
}

export const NavListMenuWrapper = styled.div<IContentID>`
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
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
        display: block;
        color: #b4b4b47a;
        text-align: center;
        margin: 10px 25px;
        text-decoration: none;
        padding-bottom: 2px;
    }
    li:nth-child(${props => props.contentId}){
        color: ${colors.mainFontColor};
        border-bottom: 1.5px solid ${colors.mainYellowColor};
    }
    li:hover{
        cursor: pointer;
    }
`;