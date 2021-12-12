import React, { FC } from "react";
import { NavBarWrapper } from "./NavBarStyle";
import { NavBarLeftSideContainer } from "./NavBarStyle";
import { NavListMenu } from './NavListMenu/NavListMenu';
import { DotsList } from "../common/DotsList/DotsList";
import Avatar from '@mui/material/Avatar';
import { colors } from './../../styledHelpers/colors';

interface IPageNumber{
    pageID: number;
    setPageIndex: (pageIndex: number) => void;
}

export const NavBar: FC<IPageNumber> = (props) =>{
    return(
        <NavBarWrapper>
            <NavBarLeftSideContainer>
                <Avatar sx={{width: 33, height: 33 ,bgcolor: `${colors.mainYellowColor}`}}>R</Avatar>
                <span><b>Radek</b> Kot</span>
            </NavBarLeftSideContainer>
            <NavListMenu setPageIndex={props.setPageIndex} pageID={props.pageID}/>
            <DotsList setPageIndex={props.setPageIndex} pageID={props.pageID}/>
        </NavBarWrapper>
    );
};