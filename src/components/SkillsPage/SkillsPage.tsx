import React, { FC }  from "react";
import { SkillsPageWrapper } from "./SkillsPageStyle";
import ProgressBar from 'react-customizable-progressbar';
import CountUp from "react-countup";

//IMGS imports
import HTML_logo from '../imgs/skillsLogo/HTML-logo.png'
import CSS_logo from '../imgs/skillsLogo/CSS-logo.png'
import JS_logo from '../imgs/skillsLogo/JS-logo.png'
import TS_logo from '../imgs/skillsLogo/TS-logo.png'
import React_logo from '../imgs/skillsLogo/React-logo.png'
import SASS_logo from '../imgs/skillsLogo/SASS-logo.png'
import StyledComponents_logo from '../imgs/skillsLogo/SC-logo.png'
import CSharp_logo from '../imgs/skillsLogo/CSharp-logo.png'
interface ICurrentPage{
    isPageTwo: boolean;
    pageWidth: number;
}

let SkillsArray = [
    {id: 1, name: 'HTML 5', img: HTML_logo, progress: 90},
    {id: 2, name: 'CSS 3', img: CSS_logo, progress: 85},
    {id: 3, name: 'JavaScript', img: JS_logo, progress: 75},
    {id: 4, name: 'TypeScript', img: TS_logo, progress: 70},
    {id: 5, name: 'React', img: React_logo, progress: 65},
    {id: 6, name: 'SASS', img: SASS_logo, progress: 70},
    {id: 7, name: 'Styled Components', img: StyledComponents_logo, progress: 75},
    {id: 8, name: 'C#', img: CSharp_logo, progress: 50},
];

export const SkillsPage: FC<ICurrentPage> = (props) => {  
    return(
        <SkillsPageWrapper isPageTwo={props.isPageTwo}>
        {props.isPageTwo === false ? null : SkillsArray.map((SkillsData) => 
         <ProgressBar
            key={SkillsData.id}
            className='progress-bars'
            radius={props.pageWidth <=360 ? 40 : (props.pageWidth <= 480 ? 50 : (props.pageWidth <= 760 ? 60 : (props.pageWidth <= 1024 ? 80 : 65)))}
            progress={SkillsData.progress}
            cut={120}
            rotate={-210}
            strokeWidth={props.pageWidth <=360 ? 8 : (props.pageWidth <= 480 ? 9 : (props.pageWidth <= 760 ? 10 : (props.pageWidth <= 1024 ? 14 : 10)))}
            strokeColor="#f4ac34"
            strokeLinecap="round"
            trackStrokeWidth={props.pageWidth <=360 ? 8 : (props.pageWidth <= 480 ? 9 : (props.pageWidth <= 760 ? 10 : (props.pageWidth <= 1024 ? 14 : 10)))}
            trackStrokeColor="#363636"
            trackStrokeLinecap="round"
            pointerRadius={0}
            initialAnimation={true}
            transition="1s ease 0.4s"
            trackTransition="0s ease">
            <CountUp className="percentWrapper" duration={1.2} end={SkillsData.progress} suffix="%"/>
            <img src={SkillsData.img} alt="Icon of code language"/>
            <span className="nameWrapper">{SkillsData.name}</span>
        </ProgressBar>
        )}
        </SkillsPageWrapper>
    );
};