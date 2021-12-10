import React, { FC } from "react";
import { DotsListWrapper } from "./DotsListStyle";
import { navOptions } from "../../MainPage/MainPage";
import { Link, animateScroll as scroll } from "react-scroll";

export const DotsList: FC = () =>{
    return(
        <DotsListWrapper>
            <ul>
                {navOptions.map(content =><Link activeClass='active' key={content.id}  to={content.rootID} spy={true} smooth={true} offset={0} duration={350}><li></li></Link> )}
            </ul>
        </DotsListWrapper>
    );
};