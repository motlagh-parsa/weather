import {lazy, Suspense} from "react";
import {Box, Grid, useTheme, CircularProgress, Typography} from "@mui/material";
import CurrentWeatherCard from "../weatherComponents/CurrentWeatherCard";
import ForecastList from "../weatherComponents/ForecastList";
import {useWeather} from "../../hooks/useWeather";
import {useCity} from "../../hooks/useCity";

const TemperatureChart = lazy(() => import("../weatherComponents/TemperatureChart"));

const Home = () => {
    const theme = useTheme();
    const {selectedCity} = useCity();
    const {data, loading, error} = useWeather(selectedCity);

    const current = data?.list?.[0] ?? null;
    const cityInfo = data?.city ?? null;
    const forecastList = data?.list ?? [];

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: theme.palette.background.default,
                px: 4,
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >
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
                            icon={data?.list[0].weather[0].icon}
                        />
                    ) : (
                        <CurrentWeatherCard/>
                    )}
                </Grid>

                <Grid size={{xs: 12, md: 8}}>
                    <Suspense
                        fallback={
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: 260}}>
                                <CircularProgress/>
                            </Box>
                        }
                    >
                        <TemperatureChart forecast={forecastList}/>
                    </Suspense>
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