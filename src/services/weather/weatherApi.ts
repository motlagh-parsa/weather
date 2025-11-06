import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface Forecast16DayResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastDay[];
    city: City;
}

export interface ForecastDay {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    weather: Weather[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    visibility: number;
    pop: number;
    rain?: {
        '3h': number;
    };
    snow?: {
        '3h': number;
    };
    dt_txt: string;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

const weatherApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const weatherService = {
    get16DayForecast: {
        byCity: async (city: string, country?: string): Promise<Forecast16DayResponse> => {
            console.log('🌤️ Making API request for city:', city);

            try {
                const response = await weatherApi.get('/forecast', {
                    params: {
                        q: country ? `${city},${country}` : city,
                        cnt: 16,
                        appid: API_KEY,
                        units: 'metric',
                    },
                });

                console.log('API Response received:', response.data);
                return response.data;
            } catch (error: unknown) {
                console.error('API Error:', error.response?.data || error.message);
                throw error;
            }
        },
    },
};