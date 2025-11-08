# Weather App

A fast, bilingual (English / Persian) weather dashboard built with **React + TypeScript + Vite**.  
When the language is Persian the UI automatically switches to **Iran Yekan** font and RTL layout.

---

## Features

- **Dynamic language switch** – English ↔ Persian (`react-i18next`)
- **RTL / LTR** – `direction` & `text-align` change instantly
- **Performance** – lazy loading, `React.memo`, `font-display: swap`
- **Type-safe** – ESLint with type-checked rules
- **Scalable** – contexts, hooks, UI atoms, locales, utils

---

## Project Structure
weather/
├─ src/
│   ├─ assets/                    # images, icons
│   ├─ components/
│   │   ├─ ui/
│   │   │   ├─ Button.tsx
│   │   │   └─ LanguageSwitcher.tsx
│   │   └─ WeatherApp.tsx        # main page (add API here)
│   ├─ contexts/
│   │   └─ LanguageContext.tsx   # i18next + data-lang provider
│   ├─ hooks/
│   │   └─ useLanguage.ts        # typed hook (lang, setLang, t)
│   ├─ locales/
│   │   ├─ en.json
│   │   └─ fa.json
│   ├─ styles/
│   │   └─ globals.css           # @font-face + CSS variables
│   ├─ types/
│   │   └─ i18n.d.ts             # i18next type augmentation
│   ├─ utils/
│   │   └─ preloadFont.ts        # optional dynamic preload
│   ├─ App.tsx                    # root with LanguageProvider
│   ├─ main.tsx                   # entry point
│   └─ vite-env.d.ts
├─ .eslintrc.cjs                  # ESLint (type-checked)
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ vite.config.ts
text---

## Prerequisites

- **Node.js** ≥ 18
- **npm** (or yarn/pnpm)

---

## Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/motlagh-parsa/weather.git
cd weather

# 2. Install dependencies
npm install

# 3. Add API key
#    • create a .env file
#    • put api key in there

# 4. Start development server
npm run dev
# Open http://localhost:5173