import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/700.css';
import './i18n';
import {AppThemeProvider} from "./contexts/themeContext/AppThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppThemeProvider>
            <App/>
        </AppThemeProvider>
    </StrictMode>
)
