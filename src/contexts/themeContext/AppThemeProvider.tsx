import { useState, useMemo, useEffect, type ReactNode } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import { AppThemeContext } from "./AppThemeContext";
import type { AppThemeContextType, ThemeMode } from "../../types/theme";

interface AppThemeProviderProps {
    children: ReactNode;
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
    const { i18n } = useTranslation();

    // ✅ Load theme from localStorage or default to 'light'
    const [mode, setMode] = useState<ThemeMode>(
        (localStorage.getItem("themeMode") as ThemeMode) || "light"
    );

    // ✅ Persist theme when it changes
    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const isRTL = i18n.language === "fa";

    // ✅ Emotion cache for RTL / LTR
    const cache = useMemo(
        () =>
            createCache({
                key: isRTL ? "mui-rtl" : "mui",
                stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [],
            }),
        [isRTL]
    );

    // ✅ Palette + theme creation
    const theme = useMemo(() => {
        const palette =
            mode === "dark"
                ? {
                    mode: "dark" as const,
                    background: {
                        default: "#1E2337",
                        paper: "#292F45",
                    },
                    text: {
                        primary: "#ffffff",
                        secondary: "#cfcfcf",
                    },
                }
                : {
                    mode: "light" as const,
                    background: {
                        default: "#F6F8FA",
                        paper: "#E1E9EE",
                    },
                    text: {
                        primary: "#003464",
                        secondary: "#555",
                    },
                };

        return createTheme({
            direction: isRTL ? "rtl" : "ltr",
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
                            transition: "background-color 0.3s, color 0.3s",
                        },
                    },
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            borderRadius: 16,
                            padding: "1.5rem",
                            boxShadow:
                                mode === "dark"
                                    ? "0 4px 12px rgba(0,0,0,0.4)"
                                    : "0 4px 12px rgba(0,0,0,0.08)",
                            backgroundColor: palette.background.paper,
                            transition: "background-color 0.3s, box-shadow 0.3s",
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
        } as import("@mui/material").ThemeOptions); // ✅ Fix type error
    }, [mode, isRTL]);

    const contextValue: AppThemeContextType = { mode, toggleColorMode };

    return (
        <AppThemeContext.Provider value={contextValue}>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
                </ThemeProvider>
            </CacheProvider>
        </AppThemeContext.Provider>
    );
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    return <ThemeWrapper>{children}</ThemeWrapper>;
};