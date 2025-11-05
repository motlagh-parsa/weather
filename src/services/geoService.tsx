import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const weatherApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const geoService = {
    searchCity: async (query: string) => {
        if (!query) return [];
        try {
            const response = await weatherApi.get('/geo/1.0/direct', {
                baseURL: 'https://api.openweathermap.org',
                params: {
                    q: query,
                    limit: 5,
                    appid: API_KEY,
                },
            });
            return response.data; // [{ name, country, lat, lon, state }]
        } catch (error) {
            console.error('Geo search error:', error);
            return [];
        }
    },
};
