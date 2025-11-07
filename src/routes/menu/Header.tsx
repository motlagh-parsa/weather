import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Stack,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "../../assets/image1.png";
import CityAutocomplete from "../../components/CityAutocomplete";
import SettingsMenu from "../../components/SettingsMenu";
import { useAuth } from "../../hooks/useAuth";
import { useCity } from "../../hooks/useCity";

const Header = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const theme = useTheme();
    const { isAuthenticated } = useAuth();
    const { selectedCity, setSelectedCity } = useCity();

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: "none",
                px: { xs: 2, md: 4 },
                py: 1,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "stretch", md: "center" },
                    justifyContent: { md: "space-between" },
                    width: "100%",
                    gap: { xs: 1, md: 0 },
                }}
            >
                {/* Left Section (Logo + Weather) */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                        component="img"
                        loading='lazy'
                        src={logo}
                        alt="Nadin Logo"
                        sx={{ height: 40, width: "auto" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {t("weather_dashboard")}
                    </Typography>
                </Stack>

                {/* Center/Bottom Section (City Selector) */}
                {isAuthenticated && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-end"
                            },
                            flexGrow: { xs: 1, md: 1 },
                            width: { xs: "100%", md: "auto" },
                            order: { xs: 2, md: 1 }, // make it appear below on small, inline on large
                        }}
                    >
                        <Box sx={{ width: { xs: "80%", sm: "60%", md: 300 } }}>
                            <CityAutocomplete
                                defaultCity={selectedCity}
                                onCitySelect={(city) => setSelectedCity(city.name)}
                            />
                        </Box>
                    </Box>
                )}

                {/* Right Section (Settings Icon) */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        order: { xs: 1, md: 2 },
                        mt: {xs: '-14%', md:0, lg:0}
                    }}
                >
                    <SettingsMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
