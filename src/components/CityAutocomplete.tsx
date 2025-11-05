import React, {useState, useEffect} from "react";
import {Autocomplete, TextField, CircularProgress} from "@mui/material";
import {geoService} from "../services/geoService.tsx";
import {useTranslation} from "react-i18next";

interface CityOption {
    name: string;
    country: string;
    state?: string;
    lat: number;
    lon: number;
}

interface CityAutocompleteProps {
    onCitySelect: (city: CityOption) => void;
    defaultCity?: string;
}

const CityAutocomplete: React.FC<CityAutocompleteProps> = ({onCitySelect, defaultCity}) => {
    const [options, setOptions] = useState<CityOption[]>([]);
    const [inputValue, setInputValue] = useState(defaultCity || "");
    const [loading, setLoading] = useState(false);
    const {t} = useTranslation()

    useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            if (inputValue.trim().length < 2) return;
            setLoading(true);
            const results = await geoService.searchCity(inputValue.trim());
            setOptions(results);
            setLoading(false);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [inputValue]);

    return (
        <Autocomplete
            freeSolo
            loading={loading}
            options={options}
            getOptionLabel={(option) =>
                typeof option === "string"
                    ? option
                    : `${option.name}${option.state ? ", " + option.state : ""}, ${option.country}`
            }
            onInputChange={(_, value) => setInputValue(value)}
            onChange={(_, value) => {
                if (typeof value !== "string" && value) onCitySelect(value);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={t("select_city")}
                    variant="outlined"
                    size="small"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
            sx={{width: 300}}
        />
    );
};

export default CityAutocomplete;
