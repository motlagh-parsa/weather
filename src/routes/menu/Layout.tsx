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
            <Box sx={{flex: 1, display: "flex", justifyContent: "center", width: "100%"}}>
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    );
};

export default Layout;