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
import {useMemo} from "react";

type ForecastItem = {
    dt: number;
    main: { temp: number; temp_min?: number; temp_max?: number };
};

interface TemperatureChartProps {
    forecast: ForecastItem[];
    city?: string;
}

const TemperatureChart = ({forecast = [], city}: TemperatureChartProps) => {
    const theme = useTheme();

    // Aggregate forecast data into average monthly temperatures
    const monthly = useMemo(() => {
        const map = new Map<number, number[]>();

        forecast.forEach(item => {
            const d = new Date(item.dt * 1000);
            const m = d.getMonth(); // 0..11
            if (!map.has(m)) map.set(m, []);
            map.get(m)!.push(item.main.temp);
        });

        const months = Array.from({length: 12}, (_, i) => {
            const arr = map.get(i) || [];
            const avg = arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
            return {
                month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
                temp: avg ?? 0,
            };
        });

        return months;
    }, [forecast]);

    return (
        <Paper
            elevation={4}
            sx={{
                p: 2.5,
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
                sx={{fontSize: "0.85rem"}}
            >
                Average Monthly Temperature {city ? `- ${city}` : ""}
            </Typography>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthly} margin={{top: 10, right: 20, left: 0, bottom: 5}}>
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
                        style={{fontSize: "0.7rem"}}
                    />

                    <YAxis
                        domain={[10, 40]}
                        ticks={[10, 20, 30, 40]}
                        stroke={theme.palette.text.secondary}
                        tickFormatter={(value) => `${value}°C`}
                        tickLine={false}
                        axisLine={false}
                        style={{fontSize: "0.7rem"}}
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
                            <stop offset="0%" stopColor="#42a5f5"/>
                            <stop offset="100%" stopColor="#ab47bc"/>
                        </linearGradient>
                    </defs>

                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="url(#tempGradient)"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{r: 4}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default TemperatureChart;
