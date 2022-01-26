import React, { FC }  from "react";
import { HomePageWrapper } from "./HomePageStyle";
import myPhoto from "./../imgs/myPhoto.png";

interface IHomeWebsideData{
    setPageIndex: (pageIndex: number) => void;
}

export const HomePage: FC<IHomeWebsideData> = (props) => {
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
                    <a href="./../doc/Junior Front-End Developer.pdf" download="Radosław Kot - Junior Front-End Developer"><button>Moje CV</button></a>
                    <button onClick={() => props.setPageIndex(3)}>Kontakt</button>
                </div>
            </div>
        </HomePageWrapper>
    );
};