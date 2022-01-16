import React, { FC, useState }  from "react";
import { PortfolioPageWrapper } from "./PortfolioPageStyle";
import { AppsLogoWrapper } from "./PortfolioPageStyle";

import HTML_logo from '../imgs/skillsLogo/HTML-logo.png'
import CSS_logo from '../imgs/skillsLogo/CSS-logo.png'
import JS_logo from '../imgs/skillsLogo/JS-logo.png'
import TS_logo from '../imgs/skillsLogo/TS-logo.png'
import React_logo from '../imgs/skillsLogo/React-logo.png'
import SASS_logo from '../imgs/skillsLogo/SASS-logo.png'
import StyledComponents_logo from '../imgs/skillsLogo/SC-logo.png'
import Redux_logo from '../imgs/skillsLogo/Redux-logo.png'
import Webpack_logo from '../imgs/skillsLogo/Webpack-logo.png'

import  DrumKit  from "../imgs/appsLogo/DrumKitLogo.png";
import  CorpoApp  from "../imgs/appsLogo/CorpoAppLogo.png";
import  WeatherApp from "../imgs/appsLogo/WeatherAppLogo.png";
import  CVWebside  from "../imgs/appsLogo/CVWebsideLogo.png";

const AppsCollection = [
    {index: 1, src: DrumKit, text: 'Aplikacja powstała w oparciu o technologie: HTML, CSS, JavaScript. Poczas jej tworzenia skupiałem się na programowaniu obiektowym.', langList: [TS_logo, Webpack_logo, SASS_logo]},
    {index: 2, src: CorpoApp, text: 'Tekst opisujący jak wykonałem apke itp', langList: [React_logo, Redux_logo, TS_logo, StyledComponents_logo]},
    {index: 3, src: WeatherApp, text: 'Tekst opisujący jak wykonałem apke itp', langList: [HTML_logo, CSS_logo, JS_logo]},
    {index: 4, src: CVWebside, text: 'Tekst opisujący jak wykonałem apke itp', langList: [HTML_logo, CSS_logo]}
];

interface ICurrentPage{
    isPageOne: boolean;
    pageIndex: number
}

export const PortfolioPage: FC<ICurrentPage> = (props) => {

    let [activeText, setActiveText] = useState('');
    let [activeList, setActiveList] = useState<string[]>(['']);
    let [isModalActive, setActiveModal] = useState(false);

    return(
        <PortfolioPageWrapper isPageOne={props.isPageOne} activeModal={isModalActive}>
            <div className="shadow-modal-wrapper">
                <div className="modal-message">
                    <i className="fas fa-times" onClick={() => setActiveModal(!isModalActive)}></i>
                    <p>{activeText}</p>
                    <p>Wykorzystane technologie:</p>
                    <span>{activeList.map((lang) => <img src={lang}/>)}</span>
                </div>
            </div>
            <AppsLogoWrapper isPageOne={props.isPageOne} activeModal={isModalActive}>
            {AppsCollection.map(content => 
            <div className="app-logo" key={content.index}> 
                <img src={content.src}/>
                <div className="app-logo-icons-wrapper">
                    <i className="fas fa-info-circle" onClick={() => {setActiveModal(!isModalActive); setActiveText(content.text); setActiveList(content.langList);}}></i>
                    <i className="far fa-play-circle"></i>
                    <i className="fab fa-github"></i>
                </div>
            </div>)}
            </AppsLogoWrapper>
            <div className="github-btn-wrapper"><button>Przejdź na mój Github</button></div>
        </PortfolioPageWrapper>
    );
};