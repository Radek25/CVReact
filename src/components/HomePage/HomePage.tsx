import React, { FC }  from "react";
import { HomePageWrapper } from "./HomePageStyle";
import myPhoto from "./../imgs/myPhoto.png"

export const HomePage: FC = () => {
    return(
        <HomePageWrapper id="home">
            <div className='img-background'>
                <img src={myPhoto}/>
            </div>
        </HomePageWrapper>
    );
};