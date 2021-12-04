import React, { FC, useState } from "react";
import { NavListMenuWrapper } from "./NavListMenuStyle";
import { Link, animateScroll as scroll } from "react-scroll";

interface IOptionID{
    setNavOptionID : (navOptionID : number) => void;
}

export const NavListMenu: FC<IOptionID> = (props) =>{
    
    const polishContent = [
        {id: 1, name: 'Home', rootID: 'home'},
        {id: 2, name: 'Portfolio', rootID: 'portfolio'}, 
        {id: 3, name: 'Umiejętności', rootID: 'skills'},
        {id: 4, name: 'Kontakt', rootID: 'contact'}
    ];

    const [number, setFlagOnName] = useState(1);
    props.setNavOptionID(number);
    return(
        <NavListMenuWrapper contentId = {number}>
            {polishContent.map(content => <Link onClick={() => setFlagOnName(content.id)} className='link' activeClass="active" to={content.rootID} spy={true} smooth={true} offset={0} duration={500}>{content.name}</Link>)}
        </NavListMenuWrapper>
    );
};