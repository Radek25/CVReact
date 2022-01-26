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
    {index: 1, src: DrumKit, text: 'DrumKit to symulator wirtualnej perkusji umożliwiający nie tylko na granie na instrumencie, ale także na nagrywanie oraz odtwarzanie ścieżek dźwiękowych, a także użycie wbudowanego metronomu. Aplikacja powstała w celu nauki programowania obiektowego oraz nauki TypeScript, Webpack i preprocesora SASS. Pisząc skupiałem się także na wykorzytaniu właściwości TypeScript jaką jest statyczne typowanie.', langList: [TS_logo, Webpack_logo, SASS_logo], githubLink:'https://github.com/Radek25/DrumKitApp', liveLink:'https://radek25.github.io/DrumKitApp/'},
    {index: 2, src: CorpoApp, text: 'CorpoApp to jeden z wielu projektów, które wykonałem w trakcie studiów, którego celem była nauka frameworka React. Podczas tworzenia aplikacji poznałem nie tylko Reacta, ale także Redux, TypeScript, Styled-Comonents oraz wiele przydatnych blibliotek wspomnianego wcześniej frameworka.', langList: [React_logo, Redux_logo, TS_logo, StyledComponents_logo], githubLink:'https://github.com/Radek25/ReactApp', liveLink:'https://radek25.github.io/ReactApp/'},
    {index: 3, src: WeatherApp, text: 'WeatherApp to prosta aplikacja pozwalająca sprawdzić katualną pogodę w danym miejscu na świecie. Tworząc ten projekt nauczyłem się pobierać i wykorzystywać dane z zewnętrznego API, a także wykorzystywać własność localStorage.', langList: [HTML_logo, CSS_logo, JS_logo], githubLink:'https://github.com/Radek25/WeatherApplication', liveLink:'https://radek25.github.io/WeatherApplication/'},
    {index: 4, src: CVWebside, text: 'CVWebside jest prostą stroną wykonaną na podstawie szablonu. Projekt miał na celu ugruntowanie umiejętności pisania w pełni semantycznego kodu HTML5 oraz wykorzystywanie dobrych praktych podczas tworzenia styli CSS3.', langList: [HTML_logo, CSS_logo], githubLink:'https://github.com/Radek25/CV_Webside', liveLink:'https://radek25.github.io/CV_Webside/'}
];

interface ICurrentPage{
    isPageOne: boolean;
    pageIndex: number;
    pageWidth: number;
}

export const PortfolioPage: FC<ICurrentPage> = (props) => {

    let [activeText, setActiveText] = useState('');
    let [activeList, setActiveList] = useState<string[]>(['']);
    let [isModalActive, setActiveModal] = useState(false);
    let [selectIMG, setSelectIMG] = useState(0);

    return(
        <PortfolioPageWrapper isPageOne={props.isPageOne} activeModal={isModalActive}>
            <div className="shadow-modal-wrapper">
                <div className="modal-message">
                    <i className="fas fa-times" onClick={() => setActiveModal(!isModalActive)}></i>
                    <p>{activeText}</p>
                    <span>{activeList.map((lang) => <img src={lang}/>)}</span>
                </div>
            </div>
            <AppsLogoWrapper isPageOne={props.isPageOne} activeModal={isModalActive}>
            {AppsCollection.map(content => 
            <div className="app-logo" key={content.index} onClick={() => setSelectIMG(content.index)}> 
                <img src={content.src}/>
                <div className = "app-logo-icons-wrapper" >
                    <i className="fas fa-info-circle" onClick={() => {setActiveModal(!isModalActive); setActiveText(content.text); setActiveList(content.langList);}}></i>
                    <a className={(props.pageWidth <= 1024 ? (selectIMG === content.index ? "show-icon-on-mobile" : "hide-icon-on-mobile") : '')} href={content.liveLink} target="_blank"><i className="far fa-play-circle"></i></a>
                    <a className={(props.pageWidth <= 1024 ? (selectIMG === content.index ? "show-icon-on-mobile" : "hide-icon-on-mobile") : '')} href={content.githubLink} target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>)}
            </AppsLogoWrapper>
            <div className="github-btn-wrapper"><a href="https://github.com/Radek25" target="_blank"><button>Przejdź na mój Github</button></a></div>
        </PortfolioPageWrapper>
    );
};