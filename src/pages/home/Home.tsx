import {Box, Grid, useTheme} from "@mui/material";
import CurrentWeatherCard from "../weatherComponents/CurrentWeatherCard.tsx";
import TemperatureChart from "../weatherComponents/TemperatureChart.tsx";
import ForecastList from "../weatherComponents/ForecastList.tsx";


const Home = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: "100vh",
                bgcolor: theme.palette.background.default,
                px: 4,
                py: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >
            {/* Top Section */}
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 4}}>
                    <CurrentWeatherCard/>
                </Grid>

                <Grid size={{xs: 12, md: 8}}>
                    <TemperatureChart/>
                </Grid>
            </Grid>

            <ForecastList/>

        </Box>
    );
};

export default Home;
