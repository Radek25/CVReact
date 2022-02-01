import React, { FC, useState } from "react";
import Axios from 'axios';
import { ContactPageWrapper } from "./ContactPageStyle";

const sendEmailURL = 'https://us-central1-cvreact-c928c.cloudfunctions.net/sendEmail';

interface ICurrentPage{
    isPageThree: boolean;
}

export const ContactPage: FC<ICurrentPage> = (props) => {
    const [emailData, setEmailData] = useState({subject:'', name:'', email:'', phone:'', message:''});
    const {name, email, phone, message} = emailData;
    const handleState = ({ target: {id='', value=''}}) => setEmailData({...emailData, [id]: value});
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        Axios.get(sendEmailURL, {
            params: {
                subject: 'Wiadomośc ze strony CV',
                name,
                email,
                phone,
                message,
            },
        });
    };
    return(
        <ContactPageWrapper isPageThree={props.isPageThree}>
            <span>Napisz do mnie <i className="fas fa-envelope"></i></span>
            <form autoComplete="off" onSubmit={() => (emailData.name !== '' ? sendEmail : null)}>
                <label htmlFor={'name'}>
                    <input id="name" onChange={handleState} value={name} className="form-name-input" type='text' name='name' placeholder="Imię"/>
                </label>
                <div className="form-email-and-tel-input">
                    <label htmlFor="emali">
                        <input id="email" onChange={handleState} type='email' name='email' placeholder="E-mail"/>
                    </label>
                    <label htmlFor="phone">
                        <input id="phone" onChange={handleState} type='tel' name='tel' placeholder="Phone"/>
                    </label>
                </div>
                <label htmlFor="message">
                    <textarea id="message" onChange={handleState} name='message' placeholder="Message"/>
                </label>
                <input className="form-submit-input" type="submit" value="Wyślij" />
            </form>
        </ContactPageWrapper>
    );
};