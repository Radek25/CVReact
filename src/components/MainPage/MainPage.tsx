import React, { FC, useState, useEffect } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";
import { SocialMedia } from "../common/SocialMedia/SocialMedia";
import ReactPageScroller from 'react-page-scroller';

export const navOptions = [
    {id: 0, name: 'Home'},
    {id: 1, name: 'Portfolio'}, 
    {id: 2, name: 'Umiejętności'},
    {id: 3, name: 'Kontakt'}
];

function GetWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
    return windowWidth;
}

 
export const MainPage: FC = () =>{
    let [pageIndex, setPageIndex] = useState(0);
    let [isPageOne, setViewPageOne] = useState(false);
    let [isPageTwo, setViewPageTwo] = useState(false);
    let [isPageThree, setViewPageThree] = useState(false);

    let [isHamburgerActive, setHamburgerBtn] = useState(false);

    const pageWidth = GetWindowWidth();

    return(
        <MainPageWrapper>
            <NavBar pageIndex={pageIndex} setPageIndex={setPageIndex} pageWidth={pageWidth}/>
            <ReactPageScroller 
                onBeforePageScroll={(pageIndex) => {
                    setPageIndex(pageIndex); 
                    if(pageIndex == 1){
                        setViewPageOne(true)
                    }
                    else if(pageIndex == 2){
                        setViewPageTwo(true)
                    }
                    else if(pageIndex == 3){
                        setViewPageThree(true)
                    }
                }} 
                renderAllPagesOnFirstRender={true} 
                customPageNumber={pageIndex} 
                animationTimer={500} 
                animationTimerBuffer={0}
           >
                <HomePage/>
                <PortfolioPage isPageOne={isPageOne}/>
                <SkillsPage isPageTwo={isPageTwo}/>
                <ContactPage isPageThree={isPageThree}/>
            </ReactPageScroller>
            {pageWidth > 360 ? <SocialMedia/> : null}
        </MainPageWrapper>
    );
};