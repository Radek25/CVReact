import React, { FC, useState }  from "react";
import { PortfolioPageWrapper } from "./PortfolioPageStyle";
import { AppCard } from "./PortfolioPageStyle";

import  DrumKit  from "../imgs/appsLogo/DrumKitLogo.png";
import  CorpoApp  from "../imgs/appsLogo/CorpoAppLogo.png";
import  WeatherApp from "../imgs/appsLogo/WeatherAppLogo.png";
import  CVWebside  from "../imgs/appsLogo/CVWebsideLogo.png";

const AppsCollection = [
    {index: 1, name: DrumKit},
    {index: 2, name: CorpoApp},
    {index: 3, name: WeatherApp},
    {index: 4, name: CVWebside}
];

interface ICurrentPage{
    isPageOne: boolean;
}

export const PortfolioPage: FC<ICurrentPage> = (props) => {
    return(
        <PortfolioPageWrapper isPageOne={props.isPageOne}>
            {AppsCollection.map(content => 
            <AppCard key={content.index} name={content.name} isPageOne={props.isPageOne}>
                {window.innerWidth > 360 ?
                <div className='shadow-card'><p>Tutaj bedzie jakiś tekst generowny z tablicy, jeszcze nie wiem co ale chyba takie ogólne rzeczy w stylu jak dany projekt robiłem z czego korzystałem itp.</p>
                    <span><i className="fas fa-play-circle"></i><i className="fab fa-github"></i></span>
                </div>
                : 
                <div className='shadow-card'>
                    <div className="mobile-icon-of-card"><i className="fas fa-play-circle"></i><span>Live</span></div>
                    <div className="mobile-icon-of-card"><i className="fab fa-github"></i><span>GitHub</span></div>
                </div>}
            </AppCard>)};
            <div className="github-btn-wrapper"><button>Przejdź na mój Github</button></div>
        </PortfolioPageWrapper>
    );
};