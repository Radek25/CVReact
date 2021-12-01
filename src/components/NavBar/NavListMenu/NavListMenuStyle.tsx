import styled from 'styled-components'
import { colors } from '../../../styledHelpers/colors'

interface ISetContentID{
    contentId: number;
}

export const NavListMenuWrapper = styled.div<ISetContentID>`
        display: flex;
        justify-content: space-between;
        align-items: center;
    .link{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        display: block;
        color: #b4b4b47a;
        text-align: center;
        margin: 10px 25px;
        text-decoration: none;
        padding-bottom: 2px;
    }
    .link:nth-child(${props => props.contentId}){
        color: ${colors.mainFontColor};
        border-bottom: 1.5px solid ${colors.mainYellowColor};
    }
`;