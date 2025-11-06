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
import {useTranslation} from "react-i18next";

type ForecastItem = {
    dt: number;
    main: { temp: number; temp_min?: number; temp_max?: number };
};

interface TemperatureChartProps {
    forecast: ForecastItem[];
}

const TemperatureChart = ({forecast = []}: TemperatureChartProps) => {
    const theme = useTheme();
    const {t} = useTranslation() as { t: (key: string) => string };

    // Aggregate forecast data into average monthly temperatures
    const monthly = useMemo(() => {
        const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const tempByMonth = new Map<number, number[]>();

        forecast.forEach(item => {
            try {
                const month = new Date(item.dt * 1000).getMonth();
                const temperatures = tempByMonth.get(month) || [];
                tempByMonth.set(month, [...temperatures, item.main.temp]);
            } catch (error: unknown) {
                console.warn('Invalid date in forecast item:', item, error);
            }
        });

        return Array.from({length: 12}, (_, monthIndex) => {
            const temperatures = tempByMonth.get(monthIndex) || [];
            const averageTemp = temperatures.length > 0
                ? Math.round(temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length)
                : 0;

            return {
                month: MONTH_NAMES[monthIndex],
                temp: averageTemp,
            };
        });
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
                {t('Average_Monthly_Temperature')}
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
