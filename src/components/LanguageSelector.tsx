import {Box, Typography, ToggleButtonGroup, ToggleButton, Divider} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useState, useEffect} from "react";

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation() as { t: (key: string) => string };
    const [lang, setLang] = useState(i18n.language || "en");

    const handleChange = (_: React.MouseEvent<HTMLElement>, newLang: string | null) => {
        if (newLang) {
            setLang(newLang);
            i18n.changeLanguage(newLang);
            localStorage.setItem("language", newLang);
        }
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLang(savedLang);
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", width: '100%', direction: 'ltr'}}>
            <Typography variant="subtitle1" sx={{fontWeight: 600, mb: 1}}>
                {t("language")}
            </Typography>

            <ToggleButtonGroup
                value={lang}
                exclusive
                onChange={handleChange}
                fullWidth
                color="primary"
                sx={{
                    display: "flex",
                    width: "100%",
                    "& .MuiToggleButton-root": {
                        flex: 1,
                        height: '45px',
                        fontSize: "0.875rem",
                        textTransform: "none",
                        borderRadius: 1,
                        borderColor: "divider",
                        fontWeight: 500,
                        "&.Mui-selected": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            "&:hover": {
                                bgcolor: "primary.dark",
                            },
                        },
                    },
                }}
            >
                <ToggleButton value="en">EN</ToggleButton>
                <ToggleButton value="fa">FA</ToggleButton>
            </ToggleButtonGroup>

            <Divider sx={{my: 1}}/>
        </Box>
    );
};

export default LanguageSelector;
