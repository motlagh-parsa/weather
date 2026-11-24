# Weather

A bilingual (English / Persian) weather dashboard built with React, TypeScript, Vite and MUI. Switching to Persian flips the whole UI to right-to-left and shows dates in the Jalali calendar.

**Live:** [weather-lilac-iota.vercel.app](https://weather-lilac-iota.vercel.app)

Built as a front-end technical assignment.

## Features

- **City search with autocomplete** from OpenWeatherMap's geocoding API.
- **Current conditions** and a **forecast list** from OpenWeatherMap's forecast endpoint, with a **temperature chart** (Recharts).
- **English and Persian** with `react-i18next`. In Persian the layout switches to RTL (MUI + `stylis-plugin-rtl`), the font to Vazirmatn, and dates to the Jalali calendar (`dayjs-jalali`).
- **Light and dark themes**, from a settings menu in the header.
- **Sign-in flow** with React Router actions and protected / public routes. The sign-in is a demo: it stores a username in `localStorage`, with no backend.

## Stack

React 18 · TypeScript · Vite · MUI · React Router · react-i18next · Recharts · Axios · Day.js

## Project structure

```
src/
├─ components/        language selector, theme toggle, settings menu, city autocomplete
├─ contexts/          auth, theme and selected-city providers
├─ hooks/             useWeather, useCity, useAuth, useAppTheme, useLocalizedDateTime
├─ i18n/              English and Persian strings
├─ pages/
│  ├─ home/           the dashboard
│  ├─ login/          sign-in page and its route action
│  └─ weatherComponents/  current weather card, forecast list, temperature chart
├─ routes/            router, layout (header, footer, 404), protected and public routes
└─ services/          OpenWeatherMap forecast and geocoding clients
```

## Run it locally

Requires Node.js 18 or newer and a free [OpenWeatherMap API key](https://openweathermap.org/api).

```bash
git clone https://github.com/motlagh-parsa/weather.git
cd weather
npm install
echo "VITE_OPENWEATHER_API_KEY=your-key-here" > .env
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build`, `npm run lint`, `npm run preview`.
