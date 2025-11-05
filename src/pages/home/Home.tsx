// src/pages/Home.tsx
import {Box, Grid, useTheme, CircularProgress, Typography} from "@mui/material";
import CurrentWeatherCard from "../weatherComponents/CurrentWeatherCard";
import TemperatureChart from "../weatherComponents/TemperatureChart";
import ForecastList from "../weatherComponents/ForecastList";
import {useWeather} from "../../hooks/useWeather.ts";
import {useState} from "react";
import CityAutocomplete from "../../components/CityAutocomplete.tsx";

const Home = () => {
    const theme = useTheme();

    const [selectedCity, setSelectedCity] = useState("Tehran");

    const {data, loading, error} = useWeather(selectedCity);

    // Safely pick the first forecast item as "current"
    const current = data?.list?.[0] ?? null;
    const cityInfo = data?.city ?? null;
    const forecastList = data?.list ?? [];

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                bgcolor: theme.palette.background.default,
                px: 4,
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >
            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                <CityAutocomplete
                    defaultCity={selectedCity}
                    onCitySelect={(city) => setSelectedCity(city.name)}
                />
            </Box>
            {/* Top Section */}
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 4}}>
                    {loading ? (
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: 220}}>
                            <CircularProgress/>
                        </Box>
                    ) : error ? (
                        <Box sx={{p: 3}}>
                            <Typography color="error">Failed to load weather: {error}</Typography>
                        </Box>
                    ) : current && cityInfo ? (
                        <CurrentWeatherCard
                            location={cityInfo.name}
                            temperature={current.main.temp}
                            condition={current.weather?.[0]?.main || current.weather?.[0]?.description}
                            feelsLike={current.main.feels_like}
                            high={current.main.temp_max}
                            low={current.main.temp_min}
                            date={new Date(current.dt * 1000).toLocaleDateString()}
                            time={new Date(current.dt * 1000).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                            icon={data?.list[0].weather[0].icon}
                        />
                    ) : (
                        <CurrentWeatherCard/>
                    )}
                </Grid>

                <Grid size={{xs: 12, md: 8}}>
                    {loading ? (
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: 260}}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                        <TemperatureChart forecast={forecastList} city={cityInfo?.name}/>
                    )}
                </Grid>
            </Grid>

            {loading ? (
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: 220}}>
                    <CircularProgress/>
                </Box>
            ) : (
                <ForecastList forecast={forecastList}/>
            )}
        </Box>
    );
};

export default Home;
