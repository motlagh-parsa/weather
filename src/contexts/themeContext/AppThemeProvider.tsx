import {useState, useMemo, type ReactNode} from 'react';
import {createTheme, ThemeProvider, CssBaseline} from '@mui/material';
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

    const theme = useMemo(() => {
        const palette =
            mode === 'dark'
                ? {
                    mode: 'dark' as const,
                    background: {
                        default: '#1E2337',
                        paper: '#292F45',
                        card: '#3F4861',
                    },
                    text: {
                        primary: '#ffffff',
                        secondary: '#cfcfcf',
                    },
                }
                : {
                    mode: 'light' as const,
                    background: {
                        default: '#F6F8FA',
                        paper: '#E1E9EE',
                        card: '#CDD9E0'
                    },
                    text: {
                        primary: '#003464',
                        secondary: '#555',
                    },
                };

        return createTheme({
            direction: isRTL ? 'rtl' : 'ltr',
            palette,
            typography: {
                fontFamily: "'Inter', sans-serif",
                allVariants: { color: palette.text.primary },
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: {
                        body: {
                            backgroundColor: palette.background.default,
                            color: palette.text.primary,
                            transition: 'background-color 0.3s, color 0.3s',
                        },
                    },
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            borderRadius: 16,
                            padding: '1.5rem',
                            boxShadow: mode === 'dark'
                                ? '0 4px 12px rgba(0,0,0,0.4)'
                                : '0 4px 12px rgba(0,0,0,0.08)',
                            backgroundColor: palette.background.paper,
                            transition: 'background-color 0.3s, box-shadow 0.3s',
                        },
                    },
                },
                MuiTypography: {
                    styleOverrides: {
                        root: {
                            color: palette.text.primary,
                        },
                    },
                },
            },
        });
    }, [mode, isRTL]);

    const contextValue: AppThemeContextType = { mode, toggleColorMode };

    return (
        <AppThemeContext.Provider value={contextValue}>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div dir={isRTL ? 'rtl' : 'ltr'}>{children}</div>
                </ThemeProvider>
            </CacheProvider>
        </AppThemeContext.Provider>
    );
};

export const AppThemeProvider = ({children}: AppThemeProviderProps) => {
    return <ThemeWrapper>{children}</ThemeWrapper>;
};
