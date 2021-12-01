import React, { FC } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";

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