import axios, {type AxiosRequestConfig} from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const geoService = {
    searchCity: async (query: string) => {
        if (!query) return [];

        const url = "https://api.openweathermap.org/geo/1.0/direct";

        const config: AxiosRequestConfig = {
            params: {
                q: query,
                limit: 5,
                appid: API_KEY,
            },
        };

        try {
            const response = await axios.get(url, config);
            return response.data;
        } catch (error) {
            console.error("Geo search error:", error);
            return [];
        }
    },
};