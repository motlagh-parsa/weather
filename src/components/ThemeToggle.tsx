import {ToggleButtonGroup, ToggleButton, Typography, Box} from "@mui/material";
import {Brightness4, Brightness7} from "@mui/icons-material";
import {useAppTheme} from "../hooks/useAppTheme";
import {useTranslation} from "react-i18next";

const ThemeToggle = () => {
    const {mode, toggleColorMode} = useAppTheme();
    const { t } = useTranslation() as { t: (key: string) => string };

    const handleChange = (_: React.MouseEvent<HTMLElement>, newMode: "light" | "dark" | null) => {
        if (newMode && newMode !== mode) toggleColorMode();
    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", width: '100%', direction:'ltr'}}>
            <Typography variant="subtitle1" fontWeight={600} sx={{mb: 1}}>
                {t('mode')}
            </Typography>
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleChange}
                size="small"
                sx={{
                    display: "flex",
                    width: "100%",
                    "& .MuiToggleButton-root": {
                        flex: 1,
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
                <ToggleButton value="light">
                    <Brightness7 fontSize="small" sx={{mr: 1, ml: 1}}/> {t('light')}
                </ToggleButton>
                <ToggleButton value="dark">
                    <Brightness4 fontSize="small" sx={{mr: 1, ml: 1}}/> {t('dark')}
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default ThemeToggle;