import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'pt-BR',
        fallbackLng: 'pt-BR',
        backend: {
            loadPath: '/locales/{{ns}}/{{lng}}.json'
        },
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        returnObjects: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            wait: true,
            useSuspense: false
        }
    });


export default i18n;