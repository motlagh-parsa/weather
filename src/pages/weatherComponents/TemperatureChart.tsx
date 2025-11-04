import { Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", temp: 18 },
    { month: "Feb", temp: 22 },
    { month: "Mar", temp: 25 },
    { month: "Apr", temp: 28 },
    { month: "May", temp: 30 },
];

const TemperatureChart = () => {
    return (
        <Paper sx={{ p: 3, borderRadius: 3, height: 250 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Average Monthly Temperature
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#4FC3F7" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default TemperatureChart;
