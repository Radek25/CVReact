import React, { FC } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";
import ReactPageScroller from 'react-page-scroller';

export const navOptions = [
    {id: 1, name: 'Home', rootID: 'home'},
    {id: 2, name: 'Portfolio', rootID: 'portfolio'}, 
    {id: 3, name: 'Umiejętności', rootID: 'skills'},
    {id: 4, name: 'Kontakt', rootID: 'contact'}
];

let test = 1;
let test2: boolean = false;
export const MainPage: FC = () =>{
    return(
        <MainPageWrapper>
            <NavBar/>
            <ReactPageScroller>
                <HomePage/>
                <PortfolioPage/>
                <SkillsPage/>
                <ContactPage/>
            </ReactPageScroller>
        </MainPageWrapper>
    );
};