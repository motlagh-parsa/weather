import {Box, Typography, Paper} from "@mui/material";
import SunIcon from '../../assets/sunny.png'

const CurrentWeatherCard = () => {
    return (
        <Paper
            elevation={2}
            sx={{
                p: 3,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h6">San Francisco</Typography>
            <Typography variant="body2" color="text.secondary">
                Monday, 24 Dec 2023 — 11:45 AM
            </Typography>

            <Box mt={2} display="flex" alignItems="center" gap={2}>
                <img src={SunIcon} alt="Weather" width={90}/>
                <Box>
                    <Typography variant="h3">26°C</Typography>
                    <Typography color="text.secondary">Feels like 26</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CurrentWeatherCard;
