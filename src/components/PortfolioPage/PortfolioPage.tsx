import React, { FC }  from "react";
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
            {AppsCollection.map(content => <AppCard key={content.index} index={content.index} name={content.name} isPageOne={props.isPageOne}/>)};
            <div className="github-btn-wrapper"><button>Przejdź na mój Github</button></div>
        </PortfolioPageWrapper>
    );
};