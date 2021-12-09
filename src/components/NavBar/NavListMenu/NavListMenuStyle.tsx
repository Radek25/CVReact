import styled from 'styled-components'
import { colors } from '../../../styledHelpers/colors'

export const NavListMenuWrapper = styled.div`
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
        cursor: pointer;
    }
    .active{
        color: ${colors.mainFontColor};
        border-bottom: 1.5px solid ${colors.mainYellowColor};
    }
`;