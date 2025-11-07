import {useState, type ReactNode} from "react";
import {CityContext} from './CityContext.ts'

export const CityProvider = ({children}: { children: ReactNode }) => {
    const [selectedCity, setSelectedCity] = useState("Tehran");
    return (
        <CityContext.Provider value={{selectedCity, setSelectedCity}}>
            {children}
        </CityContext.Provider>
    );
};
