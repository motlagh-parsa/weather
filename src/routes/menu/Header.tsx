import {AppBar, Toolbar, Typography, Box, useTheme, IconButton} from '@mui/material';
import {useTranslation} from 'react-i18next';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageSelector from "../../components/LanguageSelector.tsx";
import ThemeToggle from "../../components/ThemeToggle.tsx";
import {useAuth} from "../../hooks/useAuth.ts";

const Header = () => {
    const {t} = useTranslation();
    const theme = useTheme();
    const {isAuthenticated, logout} = useAuth();

    return (
        <AppBar position="static" elevation={0} color="transparent"
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}>
            <Toolbar sx={{bgcolor: theme.palette.background.default}}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {t('weather')}
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <ThemeToggle/>
                    <LanguageSelector/>
                    {isAuthenticated && (
                        <IconButton
                            onClick={logout}
                            color="inherit"
                            aria-label={t('logout')}
                        >
                            <LogoutIcon/>
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;