import React, { FC, } from "react";
import { NavListMenuWrapper } from "./NavListMenuStyle";
import { navOptions } from "../../MainPage/MainPage";

interface IPageNumber{
    pageIndex: number; //Przychodzący pageIndex
    setPageIndex: (pageIndex: number) => void; //Wy pageIndex
}

export const NavListMenu: FC<IPageNumber> = (props) =>{
    return(
        <NavListMenuWrapper pageIndex={props.pageIndex}>
            {navOptions.map(option => <li onClick={() => props.setPageIndex(option.id)} key={option.id}>{option.name}</li>)}
        </NavListMenuWrapper>
    );
};