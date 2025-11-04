import {AppThemeProvider} from './contexts/themeContext/AppThemeProvider.tsx';
import './i18n';
import {CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Index.tsx";

function App() {
    // return (
    //     <AppThemeProvider>
    //         <div style={{display: 'flex', alignItems: 'center'}}>
    //             <ThemeToggle/>
    //             <LanguageSelector/>
    //         </div>
    //         <CssBaseline/>
    //         <Container maxWidth="lg" sx={{py: 4}}>
    //             <RouterProvider router={router}/>
    //         </Container>
    //     </AppThemeProvider>

    return (
        <AppThemeProvider>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </AppThemeProvider>

    );
    // );
}

export default App;