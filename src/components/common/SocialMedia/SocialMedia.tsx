import React, { FC }  from "react";
import { SocialMediaWrapper } from "./SocialMediaStyle";;

export const SocialMedia: FC = () => {
    return(
        <SocialMediaWrapper>
            <a href="https://www.facebook.com/radek.kot.7" target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://m.me/radek.kot.7" target='_blank' rel="noreferrer"><i className="fab fa-facebook-messenger"></i></a>
            <a href="https://github.com/Radek25" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rados%C5%82aw-kot-7b1707221" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        </SocialMediaWrapper>
    );
};