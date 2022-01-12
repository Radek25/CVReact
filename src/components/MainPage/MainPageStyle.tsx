import styled from 'styled-components';
import { colors } from '../../styledHelpers/colors';

export const MainPageWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.mainBackgroundColor};
    .websideInUpdate{
        width: 100vw;
        height: 100vh;
        background-color: ${colors.mainBackgroundColor};
        display: flex;
        align-items: center;
        flex-direction: column;
        img{
            width: 30vw;
            height: 45vh;
        }
        p{
            font-size: 3vw;
            color: ${colors.mainFontColor};
            text-align: center;
            line-height: 2;
        }
        i{
            font-size: 3.5vw;
            color: ${colors.mainYellowColor};
        }
    }
`;