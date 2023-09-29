import React from "react";
import { useState } from "react";
import {IntlProvider} from 'react-intl';
import messagesSpanish from "../lang/es.json";
import messagesEnglish from "../lang/en.json";

const langContext = React.createContext();

const LangProvider= ({children}) => {
    const [messages, setMessages] = useState(messagesSpanish);
    const [locale, setLocale] = useState('es');

    const changeLanguage = (lang) => {
        if(lang === 'es'){
            setMessages(messagesSpanish)
            setLocale('es')
        }
        if(lang === 'en'){
            setMessages(messagesEnglish)
            setLocale('en')
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