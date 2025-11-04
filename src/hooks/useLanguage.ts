import {useEffect, useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

export const useLanguage = () => {
    const {i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng);
            updateDocumentDirection(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);
        updateDocumentDirection(i18n.language);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const changeLanguage = useCallback(
        (lng: string) => {
            if (lng !== i18n.language) {
                i18n.changeLanguage(lng);
            }
        },
        [i18n]
    );

    return {currentLanguage, changeLanguage};
};

const updateDocumentDirection = (lng: string) => {
    const isRTL = lng === 'fa';
    const dir = isRTL ? 'rtl' : 'ltr';

    document.dir = dir;
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lng);
};
