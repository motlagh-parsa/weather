import {AppBar, Toolbar, Typography, Box, useTheme} from '@mui/material';
import {useTranslation} from 'react-i18next';
import ThemeToggle from "../../components/ThemeToggle.tsx";
import LanguageSelector from "../../components/LanguageSelector.tsx";


const Header = () => {
    const {t} = useTranslation();
    const theme = useTheme()

    return (
        <AppBar position="static" elevation={0} color="transparent"
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}>
            <Toolbar sx={{bgcolor: theme.palette.background.paper}}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {t('weather')}
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <ThemeToggle/>
                    <LanguageSelector/>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;