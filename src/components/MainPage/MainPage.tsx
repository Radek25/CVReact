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
    let [pageIndex, setPageIndex] = useState(0);
    return(
        <MainPageWrapper>
            <NavBar pageIndex={pageIndex} setPageIndex={setPageIndex}/>
            <ReactPageScroller onBeforePageScroll={(pageIndex) => setPageIndex(pageIndex)} renderAllPagesOnFirstRender={true} customPageNumber={pageIndex} animationTimer={500} animationTimerBuffer={0}>
                <HomePage/>
                <PortfolioPage isPageOne={pageIndex > 0 ? true : false}/>
                <SkillsPage/>
                <ContactPage/>
            </ReactPageScroller>
            <SocialMedia/>
        </MainPageWrapper>
    );
};