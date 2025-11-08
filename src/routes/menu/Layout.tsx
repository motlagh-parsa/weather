import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header/>
            <Box sx={{display: "flex", justifyContent: "center", width: "100%", alignItems: 'center', flexGrow: 1}}>
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    );
};

export default Layout;