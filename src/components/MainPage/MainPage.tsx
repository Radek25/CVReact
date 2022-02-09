import React, { FC, useState, useEffect } from "react";
import { MainPageWrapper } from "./MainPageStyle";
import { NavBar } from "../NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { PortfolioPage } from "../PortfolioPage/PortfolioPage";
import { SkillsPage } from "../SkillsPage/SkillsPage";
import { ContactPage } from "../ContactPage/ContactPage";
import { SocialMedia } from "../common/SocialMedia/SocialMedia";
import ReactPageScroller from 'react-page-scroller';


import CodeCat from '../imgs/codeCat.gif'

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

function GetWindowHeight() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight);
        }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
    return windowHeight;
}

 
export const MainPage: FC = () =>{
    let [pageIndex, setPageIndex] = useState(0);
    let [isPageOne, setViewPageOne] = useState(false);
    let [isPageTwo, setViewPageTwo] = useState(false);
    let [isPageThree, setViewPageThree] = useState(false);

    const pageWidth = GetWindowWidth();
    const pageHeight = GetWindowHeight();
    if(pageWidth <= 1024 && pageHeight <= pageWidth)
    {
        return(
            <MainPageWrapper>
                <div className="websideInUpdate">
                    <img src={CodeCat} alt="Coding cat GIF"/>
                    <p>
                        Niestety, strona w tej rodzielczości nie jest jeszcze dostępna &#128532;<br/>
                        Ustaw urządzenie pionowo, aby wyświetlić stonę <i className="fas fa-mobile-alt"></i>
                    </p>
                </div>
            </MainPageWrapper>
        );
    }
    else
    {
        return(
            <MainPageWrapper>
                <NavBar pageIndex={pageIndex} setPageIndex={setPageIndex} pageWidth={pageWidth}/>
                <ReactPageScroller 
                    onBeforePageScroll={(pageIndex) => {
                        setPageIndex(pageIndex); 
                        if(pageIndex === 1){
                            setViewPageOne(true)
                        }
                        else if(pageIndex === 2){
                            setViewPageTwo(true)
                        }
                        else if(pageIndex === 3){
                            setViewPageThree(true)
                        }
                    }} 
                    renderAllPagesOnFirstRender={true} 
                    customPageNumber={pageIndex} 
                    animationTimer={500} 
                    animationTimerBuffer={0}
                >
                    <HomePage setPageIndex={setPageIndex}/>
                    <PortfolioPage isPageOne={isPageOne} pageIndex={pageIndex} pageWidth={pageWidth}/>
                    <SkillsPage isPageTwo={isPageTwo} pageWidth={pageWidth}/>
                    <ContactPage isPageThree={isPageThree}/>
                </ReactPageScroller>
                {pageWidth > 1024 ? <SocialMedia/> : null}
            </MainPageWrapper>
        );
    }
};