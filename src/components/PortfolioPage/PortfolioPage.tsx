import React, { FC, useState }  from "react";
import { PortfolioPageWrapper } from "./PortfolioPageStyle";
import { AppsLogoWrapper } from "./PortfolioPageStyle";

import  DrumKit  from "../imgs/appsLogo/DrumKitLogo.png";
import  CorpoApp  from "../imgs/appsLogo/CorpoAppLogo.png";
import  WeatherApp from "../imgs/appsLogo/WeatherAppLogo.png";
import  CVWebside  from "../imgs/appsLogo/CVWebsideLogo.png";

const AppsCollection = [
    {index: 1, src: DrumKit, text: 'Aplikacja powstała w oparciu o technologie: HTML, CSS, JavaScript. Poczas jej tworzenia skupiałem się na programowaniu obiektowym.'},
    {index: 2, src: CorpoApp, text: 'Tekst opisujący jak wykonałem apke itp'},
    {index: 3, src: WeatherApp, text: 'Tekst opisujący jak wykonałem apke itp'},
    {index: 4, src: CVWebside, text: 'Tekst opisujący jak wykonałem apke itp'}
];

interface ICurrentPage{
    isPageOne: boolean;
}

export const PortfolioPage: FC<ICurrentPage> = (props) => {

    let [activeAppLogo, setActiveAppLogo] = useState(0);
    return(
        <PortfolioPageWrapper isPageOne={props.isPageOne} activeAppCard={activeAppLogo}>
            <AppsLogoWrapper isPageOne={props.isPageOne} activeAppCard={activeAppLogo}>
            {AppsCollection.map(content => 
            <div className="app-logo" key={content.index} onClick={() => setActiveAppLogo(content.index)}> 
                <img src={content.src}/>
                <div className="app-logo-text-icons-wrapper">
                    <p>{content.text}</p>
                    <div className="icons-wrapper">
                        <i className="far fa-play-circle"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
            </div>)}
            </AppsLogoWrapper>
            <div className="github-btn-wrapper"><button>Przejdź na mój Github</button></div>
        </PortfolioPageWrapper>
    );
};