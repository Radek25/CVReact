import React, { FC, useState } from "react";
import { NavListMenuWrapper } from "./NavListMenuStyle";

export const NavListMenu: FC = () =>{

    const polishContent = [
        {id: 1, name: 'Home'},
        {id: 2, name: 'O mnie'},
        {id: 3, name: 'Portfolio'}, 
        {id: 4, name: 'Umiejętności'},
        {id: 5, name: 'Kontakt'}
    ];

    const [number, setFlagOnName] = useState(1);

    return(
        <NavListMenuWrapper contentId = {number}>
            <ul>
                {polishContent.map( content => <li onClick={() => setFlagOnName(content.id)}>{content.name}</li>)}
            </ul>
        </NavListMenuWrapper>
    );
};