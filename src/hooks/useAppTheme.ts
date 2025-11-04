import {useContext} from 'react';
import {AppThemeContext} from '../contexts/themeContext/AppThemeContext.ts';

export const useAppTheme = () => {
    const context = useContext(AppThemeContext);
    if (!context) {
        throw new Error('useAppTheme must be used within an AppThemeProvider');
    }
    return context;
};