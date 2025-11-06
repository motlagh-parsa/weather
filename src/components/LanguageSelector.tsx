import {IconButton, Tooltip} from '@mui/material';
import {Language} from '@mui/icons-material';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '../hooks/useLanguage';

const LanguageSelector = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const {currentLanguage, changeLanguage} = useLanguage();

    const handleLanguageToggle = () => {
        const nextLanguage = currentLanguage === 'en' ? 'fa' : 'en';
        changeLanguage(nextLanguage);
    };

    const nextLanguage = currentLanguage === 'en' ? 'Persian' : 'English';

    return (
        <Tooltip title={`Switch to ${nextLanguage}`}>
            <IconButton
                color="inherit"
                onClick={handleLanguageToggle}
                aria-label={t('switch_language')}
            >
                <Language/>
            </IconButton>
        </Tooltip>
    );
};

export default LanguageSelector;