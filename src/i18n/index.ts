// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our application",
            switch_language: "Switch Language",
            switch_theme: "Switch Theme",
            dark_mode: "Dark Mode",
            light_mode: "Light Mode",
            home: "Home",
            about: "About",
            contact: "Contact",
            current_language: "Current Language",
            theme: "Theme",
            settings: "Settings",
            Enter_Your_Name: "Enter Your Name",
            Login: "Login",
            Please_enter_your_name: "Please enter your name",
            weather: "weather",
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            high: "High",
            low: "Low",
            feels_like: "Feels like",
            rights:
                "All rights of this site are reserved for Nadin Sadr Aria Engineering Company.",
            contact_us: "contact us",
            clear: "clear",
            clouds: "clouds",
            cloudy: "cloudy",
            rainy: "rainy",
            select_city: "Select City",
            weather_dashboard: "Weather Dashboard",
            Average_Monthly_Temperature: "Average Monthly Temperature"
        }
    },
    fa: {
        translation: {
            welcome: "خوش آمدید",
            switch_language: "عوض کردن زبان",
            switch_theme: "عوض کردن تم",
            dark_mode: "حالت تاریک",
            light_mode: "حالت روشن",
            home: "خانه",
            about: "درباره ما",
            contact: "تماس با ما",
            current_language: "زبان فعلی",
            theme: "تم",
            settings: "تنظیمات",
            Enter_Your_Name: "نام خود را وارد کنید",
            Login: "ورود",
            Please_enter_your_name: "لطفا نام خود را وارد کنید",
            weather: "آب و هوا",
            sunday: "یک شنبه",
            monday: "دو شنبه",
            tuesday: "سه شنبه",
            wednesday: "چهارشنبه",
            thursday: "پنج شنبه",
            friday: "جمعه",
            saturday: "شنبه",
            sun: "یک شنبه",
            mon: "دو شنبه",
            tue: "سه شنبه",
            wed: "چهارشنبه",
            thu: "پنج شنبه",
            fri: "جمعه",
            sat: "شنبه",
            high: "بیشینه",
            low: "کمینه",
            feels_like: "درجه احساس میشود",
            rights:
                "همه حقوق این سایت برای شرکت مهندسی نادین صدر آریا محفوظ است.",
            contact_us: "تماس با ما",
            clear: "صاف",
            clouds: "ابری",
            cloudy: "ابری",
            rainy: "بارانی",
            select_city: "انتخاب شهر",
            weather_dashboard: "داشبورد آب و هوا",
            Average_Monthly_Temperature: "میانگین دمای ماهانه"
        }
    }
};

// ✅ Get saved language (persisted across refresh)
const savedLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
    resources,
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

// ✅ Save language change to localStorage
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("language", lng);
});

export default i18n;