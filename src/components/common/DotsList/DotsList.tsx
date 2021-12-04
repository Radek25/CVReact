import React, { FC, useState } from "react";
import { DotsListWrapper } from "./DotsListStyle";

interface IOptionID{
    navOptionID: number;
}

export const DotsList: FC<IOptionID> = (props) =>{
    return(
        <DotsListWrapper navOptionID ={props.navOptionID}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </DotsListWrapper>
    );
};