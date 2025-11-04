import React from "react";
import {Box, Chip, Paper, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import sunImage from '../../assets/sunny.png'

interface CurrentWeatherCardProps {
    location?: string;
    temperature?: number;
    condition?: string;
    feelsLike?: number;
    high?: number;
    low?: number;
    date?: string;
    time?: string;
    image?: string;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
                                                                   location = "San Francisco",
                                                                   temperature = 26,
                                                                   condition = "Cloudy",
                                                                   feelsLike = 26,
                                                                   high = 27,
                                                                   low = 10,
                                                                   date = "24 Dec, 2023",
                                                                   time = "11:45 AM",
                                                                   image = "/assets/cloudy.png", // your PNG path
                                                               }) => {
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
            {/* Left side — Text info */}
            <Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Chip icon={<LocationOnIcon/>} label={location} sx={{fontWeight: 500}}/>
                </Box>

                <Typography
                    variant="h5"
                    sx={{fontWeight: 700, mb: 0.5}}
                >
                    Monday
                </Typography>

                <Typography variant="body2">
                    {date} &nbsp; | &nbsp; {time}
                </Typography>

                <Typography
                    variant="h3"
                    sx={{fontWeight: 700}}
                >
                    {temperature}°C
                </Typography>

                <Typography variant="h6" sx={{fontWeight: 600}}>
                    {condition}
                </Typography>

                <Typography variant="body2">
                    High: {high} Low: {low}
                </Typography>
            </Box>

            <Box>
                <Box
                    component="img"
                    src={sunImage}
                    alt="weather"
                    sx={{
                        height: 120,
                        width: 120,
                        objectFit: "contain",
                    }}
                />
                <Typography
                    variant="h5"
                    sx={{mb: 0.5}}
                >
                    Monday
                </Typography>

                <Typography variant="body2">
                    Feels Like {feelsLike}
                </Typography>
            </Box>
        </Paper>
    );
};

export default CurrentWeatherCard;
