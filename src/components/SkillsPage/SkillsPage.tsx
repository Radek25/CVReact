import React, { FC }  from "react";
import { SkillsPageWrapper } from "./SkillsPageStyle";
import ProgressBar from 'react-customizable-progressbar'

export const SkillsPage: FC = () => {  
    const progress = 60;
    return(
        <SkillsPageWrapper>
        <ProgressBar
            radius={65}
            progress={progress}
            cut={120}
            rotate={-210}
            strokeWidth={10}
            strokeColor="#f4ac34"
            strokeLinecap="round"
            trackStrokeWidth={10}
            trackStrokeColor="#363636"
            trackStrokeLinecap="round"
            pointerRadius={0}
            initialAnimation={true}
            transition="1s ease 0s"
            trackTransition="0s ease">
            <span></span>
        </ProgressBar>

        <div className="test"></div>
        </SkillsPageWrapper>
    );
};