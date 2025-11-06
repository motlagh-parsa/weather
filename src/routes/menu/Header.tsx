import {AppBar, Toolbar, Typography, Box, useTheme, IconButton, Stack} from '@mui/material';
import {useTranslation} from 'react-i18next';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageSelector from "../../components/LanguageSelector.tsx";
import ThemeToggle from "../../components/ThemeToggle.tsx";
import {useAuth} from "../../hooks/useAuth.ts";
import CityAutocomplete from "../../components/CityAutocomplete.tsx";
import logo from "../../assets/image1.png";
import {useCity} from "../../hooks/useCity.ts";

const Header = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const theme = useTheme();
    const {isAuthenticated, logout} = useAuth();
    const {selectedCity, setSelectedCity} = useCity();

    return (
        <AppBar position="static" elevation={0} color="transparent"
                sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
            <Toolbar sx={{bgcolor: theme.palette.background.default, display: "flex", justifyContent: "space-between", gap: 2, marginTop: 1}}>


                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                        component="img"
                        src={logo}
                        alt="Nadin Logo"
                    />
                    <Typography variant="h6" component="div">
                        {t('weather')}
                    </Typography>
                </Stack>

                <Box sx={{flexGrow: 1, display: "flex", justifyContent: "end"}}>
                    <CityAutocomplete
                        defaultCity={selectedCity}
                        onCitySelect={(city) => setSelectedCity(city.name)}
                    />
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <ThemeToggle/>
                    <LanguageSelector/>
                    {isAuthenticated && (
                        <IconButton onClick={logout} color="inherit" aria-label={t('logout')}>
                            <LogoutIcon/>
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
