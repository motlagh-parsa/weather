import { createContext } from "react";
import type { AppThemeContextType } from "../../types/theme";

export const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);
