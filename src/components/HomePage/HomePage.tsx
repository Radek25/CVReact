import React, { FC }  from "react";
import { HomePageWrapper } from "./HomePageStyle";
import myPhoto from "./../imgs/myPhoto.png"
import { AutoType } from "../common/AutoType/AutoType";

export const HomePage: FC = () => {
    return(
        <HomePageWrapper id="home">
            <div className='img-background'>
                <img src={myPhoto} alt="MyPhoto"/>
            </div>
            <AutoType width={152} letterSpacing={5} duration={1} stepsNumber={5} color={'#ffffff'} text={'Radek'}/>
            <AutoType width={152} letterSpacing={5} duration={1} stepsNumber={5} color={'#f4ac34'} text={'Kot'}/>
        </HomePageWrapper>
    );
};