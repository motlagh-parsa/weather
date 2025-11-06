import './i18n';
import {Box, CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Index.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";
import {CityProvider} from "./contexts/CityProvider.tsx";

function App() {
    return (
        <Box sx={{bgcolor: "background.default", color: "text.primary", minHeight: "100vh", p: 0.2}}>
            <AuthProvider>
                <CityProvider>
                    <CssBaseline/>
                    <RouterProvider router={router}/>
                </CityProvider>
            </AuthProvider>
        </Box>
    );
}

export default App;
