import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {Paper, Typography, useTheme} from "@mui/material";

const data = [
    {month: "Jan", temp: 12},
    {month: "Feb", temp: 15},
    {month: "Mar", temp: 19},
    {month: "Apr", temp: 24},
    {month: "May", temp: 28},
    {month: "Jun", temp: 31},
    {month: "Jul", temp: 35},
    {month: "Aug", temp: 34},
    {month: "Sep", temp: 30},
    {month: "Oct", temp: 25},
    {month: "Nov", temp: 19},
    {month: "Dec", temp: 14},
];

const TemperatureChart = () => {
    const theme = useTheme();

    return (
        <Paper
            elevation={4}
            sx={{
                p: 2,
                borderRadius: 3,
                height: 250,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="subtitle2"
                fontWeight={600}
                mb={1.5}
                sx={{fontSize: "0.9rem"}}
            >
                Average Monthly Temprature
            </Typography>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{top: 10, right: 20, left: 0, bottom: 5}}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={theme.palette.divider}
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        stroke={theme.palette.text.secondary}
                        tickLine={false}
                        axisLine={false}
                        style={{fontSize: "0.75rem"}}
                    />

                    <YAxis
                        domain={[10, 40]}
                        ticks={[10, 20, 30, 40]}
                        stroke={theme.palette.text.secondary}
                        tickFormatter={(value) => `${value}°C`}
                        tickLine={false}
                        axisLine={false}
                        style={{fontSize: "0.75rem"}}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 8,
                            fontSize: "0.75rem",
                        }}
                        formatter={(value: number) => [`${value}°C`, "Temperature"]}
                    />

                    <defs>
                        <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop
                                offset="0%"
                                stopColor={
                                    theme.palette.mode === "light" ? "#42a5f5" : "#64b5f6"
                                }
                            />
                            <stop
                                offset="100%"
                                stopColor={
                                    theme.palette.mode === "light" ? "#ab47bc" : "#ce93d8"
                                }
                            />
                        </linearGradient>
                    </defs>

                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="url(#tempGradient)"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{r: 5}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default TemperatureChart;
