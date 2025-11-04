import {IconButton, Box, CssBaseline} from '@mui/material';
import {Brightness4, Brightness7} from '@mui/icons-material';
import {useAppTheme} from '../hooks/useAppTheme';
import {useTranslation} from 'react-i18next';

const ThemeToggle = () => {
    const {mode, toggleColorMode} = useAppTheme();
    const {t} = useTranslation();

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <CssBaseline/>
            <IconButton
                onClick={toggleColorMode}
                color="inherit"
                aria-label={t('switch_theme')}
            >
                {mode === 'dark' ? <Brightness7/> : <Brightness4/>}
            </IconButton>
        </Box>
    );
};

export default ThemeToggle;