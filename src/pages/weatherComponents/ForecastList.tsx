import {Box, Paper, Typography, Stack, useTheme} from "@mui/material";
import SunIcon from "../../assets/sunny.png";

const days = [
    {day: "Today", temp: 28},
    {day: "Mon", temp: 31},
    {day: "Tue", temp: 27},
    {day: "Wed", temp: 29},
    {day: "Thu", temp: 32},
    {day: "Fri", temp: 31},
    {day: "Sat", temp: 28},
    {day: "Sun", temp: 30},
    {day: "Mon+", temp: 33},
    {day: "Tue+", temp: 29},
    {day: "Wed+", temp: 28},
    {day: "Thu+", temp: 31},
    {day: "Fri+", temp: 27},
    {day: "Sat+", temp: 29},
    {day: "Sun+", temp: 30},
    {day: "Next", temp: 32},
];

const ForecastList = () => {
    const theme = useTheme();

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

            {/* Scrollable row */}
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
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 4,
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(0,0,0,0.4)",
                    },
                }}
            >
                {days.map((d) => (
                    <Box
                        key={d.day}
                        sx={{
                            flex: "0 0 auto",
                            width: 110,
                            height: '266px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '11%',
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
                                borderBottom: '3px solid transparent',
                                width: '100%',
                                borderImage: theme.palette.mode === 'light' ?
                                    `linear-gradient(0.25turn, ${theme.palette.background.card}, gray, ${theme.palette.background.card})` :
                                    `linear-gradient(0.25turn, ${theme.palette.background.card}, darkgray, ${theme.palette.background.card})`,
                                borderImageSlice: 1,
                            }}
                        >
                            {d.day}
                        </Typography>
                        <Box
                            component="img"
                            src={SunIcon}
                            alt={d.day}
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
                            {d.temp}°C
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
};

export default ForecastList;
