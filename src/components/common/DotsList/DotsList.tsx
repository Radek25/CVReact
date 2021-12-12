import React, { FC, useState } from "react";
import { DotsListWrapper } from "./DotsListStyle";
import { navOptions } from './../../MainPage/MainPage';
interface IPageNumber{
    pageID: number;
    setPageIndex: (pageIndex: number) => void; 
}

export const DotsList: FC<IPageNumber> = (props) =>{
    return(
        <DotsListWrapper pageID={props.pageID}>
            <ul>
                {navOptions.map(content => <li onClick={() => props.setPageIndex(content.id)} key={content.id}></li>)}
            </ul>
        </DotsListWrapper>
    );
};