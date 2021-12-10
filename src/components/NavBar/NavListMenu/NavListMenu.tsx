import React, { FC } from "react";
import { NavListMenuWrapper } from "./NavListMenuStyle";
import { navOptions } from "../../MainPage/MainPage";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavListMenu: FC = () =>{
    return(
        <NavListMenuWrapper>
            {navOptions.map(content => <Link activeClass="active" className='link' key={content.id} to={content.rootID} spy={true} smooth={true} offset={0} duration={350}>{content.name}</Link>)}
        </NavListMenuWrapper>
    );
};