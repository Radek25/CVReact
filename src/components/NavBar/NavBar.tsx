import React, { FC, useState } from "react";
import { NavBarWrapper } from "./NavBarStyle";
import { NavBarLeftSideContainer } from "./NavBarStyle";
import { NavListMenu } from './NavListMenu/NavListMenu';
import { DotsList } from "../common/DotsList/DotsList";
import Avatar from '@mui/material/Avatar';
import { colors } from './../../styledHelpers/colors';


export const NavBar: FC = () =>{

    return(
        <NavBarWrapper>
            <NavBarLeftSideContainer>
                <Avatar sx={{width: 33, height: 33 ,bgcolor: `${colors.mainYellowColor}`}}>R</Avatar>
                <span><b>Radek</b> Kot</span>
            </NavBarLeftSideContainer>
            <NavListMenu/>
            <DotsList/>
        </NavBarWrapper>
    );
};