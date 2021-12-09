import React, { FC } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";

export const navOptions = [
    {id: 1, name: 'Home', rootID: 'home'},
    {id: 2, name: 'Portfolio', rootID: 'portfolio'}, 
    {id: 3, name: 'Umiejętności', rootID: 'skills'},
    {id: 4, name: 'Kontakt', rootID: 'contact'}
];

export const MainPage: FC = () =>{
    return(
        <MainPageWrapper>
            <NavBar/>
            <HomePage/>
            <PortfolioPage/>
            <SkillsPage/>
            <ContactPage/>
        </MainPageWrapper>
    );
};