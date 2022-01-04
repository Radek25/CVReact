import React, { FC } from "react";
import { ContactPageWrapper } from "./ContactPageStyle";

interface ICurrentPage{
    isPageThree: boolean;
}

export const ContactPage: FC<ICurrentPage> = (props) => {
    return(
        <ContactPageWrapper isPageThree={props.isPageThree}>
            <span>Napisz do mnie <i className="fas fa-envelope"></i></span>
            <form autoComplete="off">
                <label>
                    <input className="form-name-input" type='text' name='name' placeholder="Imię"/>
                </label>
                <div className="form-email-and-tel-input">
                    <label>
                        <input type='email' name='email' placeholder="E-mail"/>
                    </label>
                    <label>
                        <input type='tel' name='tel' placeholder="Phone"/>
                    </label>
                </div>
                <label>
                    <textarea name='message' placeholder="Message"/>
                </label>
                <input className="form-submit-input" type="submit" value="Wyślij" />
            </form>
        </ContactPageWrapper>
    );
};