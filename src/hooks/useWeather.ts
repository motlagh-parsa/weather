import {useState, useEffect} from 'react';
import {type Forecast16DayResponse, weatherService} from "../services/weather/weatherApi.ts";

export const useWeather = (city: string) => {
    const [data, setData] = useState<Forecast16DayResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('useWeather effect triggered with city:', city);

        const fetchWeather = async () => {
            if (!city) {
                console.log('⏸No city provided, skipping fetch');
                return;
            }

            console.log('Starting weather fetch for:', city);
            setLoading(true);
            setError(null);

            try {
                const forecastData = await weatherService.get16DayForecast.byCity(city);
                console.log('Weather data set:', forecastData);
                setData(forecastData);
            } catch (err) {
                console.error('Error in useWeather:', err);
                setError('Failed to fetch weather data');
            } finally {
                console.log('Fetch completed');
                setLoading(false);
            }
        };

        fetchWeather().catch((err: unknown) => {
            console.error('Unhandled error in fetchWeather:', err);
            setError('Unexpected error occurred');
        });
    }, [city]);

    return {data, loading, error};
};