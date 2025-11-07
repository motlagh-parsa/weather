import {useContext} from "react";
import {CityContext} from "../contexts/cityContext/CityContext.ts";

export const useCity = () => {
    const context = useContext(CityContext);
    if (!context) throw new Error("useCity must be used within a CityProvider");
    return context;
};