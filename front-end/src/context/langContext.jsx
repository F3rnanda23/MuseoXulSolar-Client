import React from "react";
import { useState } from "react";
import {IntlProvider} from 'react-intl';
import messagesSpanish from "../lang/es.json";
import messagesEnglish from "../lang/en.json";

const langContext = React.createContext();

const LangProvider= ({children}) => {
    let localeDefault;
    let messageDefault;
    const lang = localStorage.getItem('lang');

    if(lang){
        localeDefault = lang
        if(lang === 'es'){
            messageDefault = messagesSpanish
        }else if(lang === 'en'){
            messageDefault = messagesEnglish
        } else {
            localeDefault = 'es'
            messageDefault = messagesSpanish
        }
    }

    const [messages, setMessages] = useState(messageDefault);
    const [locale, setLocale] = useState(localeDefault);

    const changeLanguage = (lang) => {
        switch(lang){
            case 'es':
                setMessages(messagesSpanish);
                setLocale('es');
                localStorage.setItem('lang', 'es');
                break;
            case 'en':
                setMessages(messagesEnglish);
                setLocale('en');
                localStorage.setItem('lang', 'en');
                break;
            default:
                setMessages(messagesSpanish);
                setLocale('es');
        }
    }

    return(
        <langContext.Provider value={{changeLanguage: changeLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export {LangProvider, langContext}