import './i18n';
import {Box, CssBaseline} from "@mui/material";
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
        <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", p: 0.2 }}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </Box>

    );
    // );
}

export default App;