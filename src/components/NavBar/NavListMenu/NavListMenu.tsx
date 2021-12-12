import React, { FC, useState } from "react";
import { NavListMenuWrapper } from "./NavListMenuStyle";
import { navOptions } from "../../MainPage/MainPage";

interface IPageNumber{
    pageID: number;
    setPageIndex: (pageIndex: number) => void;
}

export const NavListMenu: FC<IPageNumber> = (props) =>{
    return(
        <NavListMenuWrapper pageID={props.pageID}>
            {navOptions.map(content => <li onClick={() => props.setPageIndex(content.id)} key={content.id}>{content.name}</li>)}
        </NavListMenuWrapper>
    );
};