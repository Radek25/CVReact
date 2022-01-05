import React, { FC }  from "react";
import { HomePageWrapper } from "./HomePageStyle";
import myPhoto from "./../imgs/myPhoto.png";

export const HomePage: FC = () => {
    return(
        <HomePageWrapper>
            <div className='img-background'>
                <img src={myPhoto} alt="MyPhoto"/>
            </div>
            <div className="about-me-description">
                <h1><span>R</span>adek <span>K</span>ot</h1>
                <h4>Junior Front-End Developer</h4>
                <p>
                    Swoją przygodę z programowaniem rozpocząłem dwa lata temu, kiedy po skończeniu Technikum Łączności w Krakowie
                    wybrałem studia w Wyższej Szkole Informatyki i Ekonometrii w Krakowie na kierunku Informatyka i Ekonometria.
                    Programowanie jest dla mnie jak łamigłówka, której rozwiązywanie sprawia przyjemności i uczy logicznego myślenia.
                </p>
                <div className="cv-and-contact-buttons">
                    <a><button>Moje CV</button></a>
                    <a><button>Kontakt</button></a>
                </div>
            </div>
        </HomePageWrapper>
    );
};