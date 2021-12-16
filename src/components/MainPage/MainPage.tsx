import React, { FC, useState } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";
import ReactPageScroller from 'react-page-scroller';
import { SocialMedia } from "../common/SocialMedia/SocialMedia";


export const navOptions = [
    {id: 0, name: 'Home'},
    {id: 1, name: 'Portfolio'}, 
    {id: 2, name: 'Umiejętności'},
    {id: 3, name: 'Kontakt'}
];

 
export const MainPage: FC = () =>{
    let [pageID, setPage] = useState(0) //State i funkcja przekazywana do zmiany kolorów i zaznaczej w stylach list i kropek
    let [pageIndex, setPageIndex] = useState(0) //State i funkcja odbierająca wybrane opcje w lista lub kropki
    let [isPageOne, setFlagOnFirstPage] = useState(false);
    return(
        <MainPageWrapper>
            <NavBar setPageIndex={setPageIndex} pageID={pageID}/>
            <ReactPageScroller onBeforePageScroll={() => setFlagOnFirstPage(true)} customPageNumber={pageIndex} pageOnChange={(id) =>{setPage(id); setPageIndex(id);}} animationTimer={400} animationTimerBuffer={0}>
                <HomePage/>
                <PortfolioPage isPageOne={isPageOne}/>
                <SkillsPage/>
                <ContactPage/>
            </ReactPageScroller>
            <SocialMedia/>
        </MainPageWrapper>
    );
};
