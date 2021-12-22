import React, { FC, useState } from "react";
import { DotsListWrapper } from "./DotsListStyle";
import { navOptions } from './../../MainPage/MainPage';
interface IPageNumber{
    pageIndex: number;
    setPageIndex: (pageIndex: number) => void; 
}

export const DotsList: FC<IPageNumber> = (props) =>{
    return(
        <DotsListWrapper pageID={props.pageIndex}>
            <ul>
                {navOptions.map(option => <li onClick={() => props.setPageIndex(option.id)} key={option.id}></li>)}
            </ul>
        </DotsListWrapper>
    );
};