import {useState, useMemo, type ReactNode} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {useTranslation} from 'react-i18next';
import {AppThemeContext} from './AppThemeContext.ts';
import type {AppThemeContextType, ThemeMode} from "../../types/theme.ts";

interface AppThemeProviderProps {
    children: ReactNode;
}

const ThemeWrapper = ({children}: { children: ReactNode }) => {
    const {i18n} = useTranslation();
    const [mode, setMode] = useState<ThemeMode>('light');

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const isRTL = i18n.language === 'fa';

    const cache = useMemo(
        () =>
            createCache({
                key: isRTL ? 'mui-rtl' : 'mui',
                stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [],
            }),
        [isRTL]
    );

    const theme = useMemo(
        () =>
            createTheme({
                direction: isRTL ? 'rtl' : 'ltr',
                palette: {
                    mode,
                    ...(mode === 'dark' && {
                        background: {
                            default: '#1E2337',
                            paper: '#292F45',
                        },
                    }),
                },
            }),
        [mode, isRTL]
    );

    const contextValue: AppThemeContextType = {
        mode,
        toggleColorMode,
    };

    return (
        <AppThemeContext.Provider value={contextValue}>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <div dir={isRTL ? 'rtl' : 'ltr'}>
                        {children}
                    </div>
                </ThemeProvider>
            </CacheProvider>
        </AppThemeContext.Provider>
    );
};

export const AppThemeProvider = ({children}: AppThemeProviderProps) => {
    return <ThemeWrapper>{children}</ThemeWrapper>;
};
