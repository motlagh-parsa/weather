import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: 'Welcome to our application',
            switch_language: 'Switch Language',
            switch_theme: 'Switch Theme',
            dark_mode: 'Dark Mode',
            light_mode: 'Light Mode',
            home: 'Home',
            about: 'About',
            contact: 'Contact',
            current_language: 'Current Language',
            theme: 'Theme',
            settings: 'Settings',
            Enter_Your_Name: 'Enter Your Name',
            Login: 'Login',
            Please_enter_your_name: 'Please enter your name',
            weather: 'weather'
        },
    },
    fa: {
        translation: {
            welcome: 'خوش آمدید',
            switch_language: 'عوض کردن زبان',
            switch_theme: 'عوض کردن تم',
            dark_mode: 'حالت تاریک',
            light_mode: 'حالت روشن',
            home: 'خانه',
            about: 'درباره ما',
            contact: 'تماس با ما',
            current_language: 'زبان فعلی',
            theme: 'تم',
            settings: 'تنظیمات',
            Enter_Your_Name: 'نام خود را وارد کنید',
            Login: 'ورود',
            Please_enter_your_name: 'لطفا نام خود را وارد کنید',
            weather: 'آب و هوا'
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;