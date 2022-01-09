import React, { FC, useState} from "react";
import { NavBarWrapper } from "./NavBarStyle";
import { NavBarLeftSideContainer } from "./NavBarStyle";
import { NavListMenu } from './NavListMenu/NavListMenu';
import { DotsList } from "../common/DotsList/DotsList";
import { SocialMedia } from "../common/SocialMedia/SocialMedia";
import Avatar from '@mui/material/Avatar';
import { colors } from './../../styledHelpers/colors';

interface IPageData{
    pageIndex: number; //Przychodzący pageIndex wysyłany do NavListMenu i DotsList
    setPageIndex: (pageIndex: number) => void; //Wychodzący pageIndex wysyłany do MainPage
    pageWidth: number;
}

export const NavBar: FC<IPageData> = (props) =>{
    let [isHamburgerMenuUsed, setHamburgerBtnUsed] = useState(false);
    let [isHamburgerMenuOpen, setHamburgerBtnOpen] = useState(false);
    let [isHamburgerMenuClose, setHamburgerBtnClose] = useState(true);

    return(
        <NavBarWrapper isHamburgerMenuUsed={isHamburgerMenuUsed} isHamburgerMenuOpen={isHamburgerMenuOpen} isHamburgerMenuClose={isHamburgerMenuClose}>
            {props.pageWidth <= 480 ? 
                <button className="burger-menu-btn" onClick={() => setHamburgerBtnUsed(true)}>
                    {
                        isHamburgerMenuOpen === false? 
                        <i className="fas fa-bars" onClick={() => {setHamburgerBtnOpen(!isHamburgerMenuOpen); setHamburgerBtnClose(!isHamburgerMenuClose);}}></i>: 
                        <i className="fas fa-times" onClick={() => {setHamburgerBtnOpen(!isHamburgerMenuOpen); setHamburgerBtnClose(!isHamburgerMenuClose);}}></i>
                    }
                </button> : null
            }
            <NavBarLeftSideContainer>
                <Avatar sx={{width: 33, height: 33 ,bgcolor: `${colors.mainYellowColor}`}}>R</Avatar>
                <span><b>Radek</b> Kot</span>
            </NavBarLeftSideContainer>
            <NavListMenu setPageIndex={props.setPageIndex} pageIndex={props.pageIndex}/>
            <DotsList setPageIndex={props.setPageIndex} pageIndex={props.pageIndex}/>
            {props.pageWidth <= 480 ? <SocialMedia/> : null}
        </NavBarWrapper>
    );
};