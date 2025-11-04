import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
            <Header/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Outlet/>
            </div>
            <Footer/>
        </Box>
    );
};

export default Layout;