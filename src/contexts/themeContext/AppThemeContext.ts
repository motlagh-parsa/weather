import {createContext} from 'react';
import type {AppThemeContextType} from "../../types/theme.ts";

export const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);