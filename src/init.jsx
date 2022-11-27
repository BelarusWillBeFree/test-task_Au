import React from 'react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import ru from './locales/ru.js';
import App from './App.jsx';

// // eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  const i18n = i18next.createInstance();
  const defaultLng = 'ru';
  await i18n.use(initReactI18next).init({
    fallbackLng: defaultLng,
    debug: false,

    resources: {
      ru,
    },
  });

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
};
