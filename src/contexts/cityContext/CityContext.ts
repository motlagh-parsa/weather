import {createContext} from "react";
interface CityContextType {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
}
export const CityContext = createContext<CityContextType | undefined>(undefined);
