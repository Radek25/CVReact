import styled from "styled-components";
import { colors } from "../../styledHelpers/colors";

export const SkillsPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 70px 20px;
    background-color: ${colors.mainBackgroundColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    span{
        width: 50px;
        height: 30px;
        top: 60px;
        left: 60px;
        background-color: red;
        position: absolute;
    }
    .test{
        width: 100%;
        height: 200px;
        background-color: green;
    }
`;