import React from "react";
import {Box, Chip, Paper, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {useLocalizedDateTime} from "../../hooks/useLocalizedDateTime";

interface CurrentWeatherCardProps {
    location?: string;
    temperature?: number;
    condition?: string;
    feelsLike?: number;
    high?: number;
    low?: number;
    icon?: string;
    date?: string;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
                                                                   location = "Tehran",
                                                                   temperature = 26,
                                                                   condition = "Clear",
                                                                   feelsLike = 26,
                                                                   high = 28,
                                                                   low = 18,
                                                                   date = "2023-12-24",
                                                                   icon,
                                                               }) => {
    const {t} = useTranslation() as { t: (key: string) => string };
    const {localizedDate, localizedTime} = useLocalizedDateTime();
    const weekday: string = new Date(date).toLocaleDateString('en-US', {weekday: "long"});

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <Paper
            elevation={4}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 3,
                borderRadius: 3,
                minHeight: 180,
            }}
        >
            <Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Chip icon={<LocationOnIcon/>} label={location} sx={{fontWeight: 500}}/>
                </Box>

                <Typography variant="h5" sx={{fontWeight: 700, mb: 0.5}}>
                    {t(weekday.toLowerCase())}
                </Typography>

                <Typography variant="body2">
                    {`${localizedDate} | ${localizedTime}`}
                </Typography>

                <Typography variant="h3" sx={{fontWeight: 700}}>
                    {Math.round(temperature)}°C
                </Typography>

                <Typography variant="body2">
                    {`${t("high")}: ${Math.round(high)} ${t("low")}: ${Math.round(low)}`}
                </Typography>
            </Box>

            <Box textAlign="center">
                <Box
                    component="img"
                    loading='lazy'
                    src={iconUrl}
                    alt={condition}
                    sx={{height: 120, width: 120, objectFit: "contain"}}
                />

                <Typography variant="h6" sx={{fontWeight: 600}}>
                    {t(condition.toLowerCase())}
                </Typography>

                <Typography variant="body2" sx={{mt: 1}}>
                    {i18n.language === "en"
                        ? `${t("feels_like")} ${Math.round(feelsLike)}°C`
                        : `${Math.round(feelsLike)}°C ${t("feels_like")}`}
                </Typography>
            </Box>
        </Paper>
    );
};

export default React.memo(CurrentWeatherCard, (prev, next) =>
    JSON.stringify(prev) === JSON.stringify(next)
);