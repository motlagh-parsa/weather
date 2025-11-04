import {Box, Paper, Typography, Stack} from "@mui/material";
import SunIcon from '../../assets/sunny.png'

const days = [
    {day: "Today", temp: 28},
    {day: "Mon", temp: 31},
    {day: "Tue", temp: 27},
    {day: "Wed", temp: 29},
    {day: "Thu", temp: 32},
    {day: "Fri", temp: 31},
    {day: "Sat", temp: 28},
];

const ForecastList = () => {
    return (
        <Paper sx={{p: 3, borderRadius: 3}}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
                2 Weeks Forecast
            </Typography>

            <Stack direction="row" gap={2} overflow="auto">
                {days.map((d) => (
                    <Box
                        key={d.day}
                        sx={{
                            width: 100,
                            textAlign: "center",
                            borderRadius: 2,
                            bgcolor: "background.paper",
                            p: 2,
                            flexShrink: 0,
                        }}
                    >
                        <Typography variant="body2">{d.day}</Typography>
                        <img src={SunIcon} alt={d.day} width={40}/>
                        <Typography fontWeight={600}>{d.temp}°C</Typography>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
};

export default ForecastList;
