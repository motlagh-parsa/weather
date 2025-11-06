import React from "react";
import {Box, Paper, Typography, Stack, useTheme} from "@mui/material";
import SunIcon from "../../assets/sunny.png";
import type {ForecastDay} from "../../services/weather/weatherApi";
import {useTranslation} from "react-i18next";

interface ForecastListProps {
    forecast: ForecastDay[];
}

const ForecastList: React.FC<ForecastListProps> = ({forecast}) => {
    const theme = useTheme();
    const { t } = useTranslation() as { t: (key: string) => string };

    const getDayName = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-US", {
            weekday: "short",
        });
    };

    return (
        <Paper
            elevation={4}
            sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: theme.palette.background.paper,
                overflow: "hidden",
            }}
        >
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
                2 Weeks Forecast
            </Typography>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    overflowX: "auto",
                    pb: 1,
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": {
                        height: 8,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(0,0,0,0.08)",
                        borderRadius: 4,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(0,0,0,0.3)",
                        borderRadius: 4,
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.5)"
                                : "rgba(0,0,0,0.5)",
                    },
                }}
            >
                {forecast.slice(0, 16).map((f, i) => {
                    const day = getDayName(f.dt);
                    const temp = Math.round(f.main.temp);
                    const iconUrl = f.weather?.[0]?.icon
                        ? `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
                        : SunIcon;

                    return (
                        <Box
                            key={i}
                            sx={{
                                flex: "0 0 auto",
                                width: 110,
                                height: 266,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "11%",
                                textAlign: "center",
                                borderRadius: 3,
                                p: 2,
                                bgcolor: theme.palette.background.card,
                                boxShadow:
                                    theme.palette.mode === "dark"
                                        ? "0px 2px 6px rgba(0,0,0,0.5)"
                                        : "0px 2px 6px rgba(0,0,0,0.1)",
                                scrollSnapAlign: "start",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        theme.palette.mode === "dark"
                                            ? "0px 4px 10px rgba(0,0,0,0.6)"
                                            : "0px 4px 12px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 500,
                                    borderBottom: "3px solid transparent",
                                    width: "100%",
                                    borderImage: theme.palette.mode === "light"
                                        ? `linear-gradient(0.25turn, ${theme.palette.background.card}, gray, ${theme.palette.background.card})`
                                        : `linear-gradient(0.25turn, ${theme.palette.background.card}, darkgray, ${theme.palette.background.card})`,
                                    borderImageSlice: 1,
                                }}
                            >
                                {t(day.toLowerCase())}
                            </Typography>

                            <Box
                                component="img"
                                src={iconUrl}
                                alt={f.weather?.[0]?.main || "weather"}
                                sx={{
                                    height: "35%",
                                    my: 1,
                                    objectFit: "contain",
                                }}
                            />

                            <Typography
                                variant="body1"
                                sx={{fontWeight: 600, color: theme.palette.text.primary}}
                            >
                                {temp}°C
                            </Typography>
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
};

export default ForecastList;
