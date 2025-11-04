import NadinLogo from "../../assets/nadin-logo.png";
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box sx={{
                display: 'flex',
                gap: '5%',
                mt: 4,
                pt: 3,
                borderTop: 1,
                borderColor: 'divider',
                textAlign: 'center',
                background: 'linear-gradient(90deg,rgba(243, 250, 254, 1) 0%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%)',
                backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#F3FAFE' : '#121212'),
                backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(90deg,rgba(243, 250, 254, 1) 0%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%)'
                        : 'linear-gradient(90deg,rgba(41, 47, 69, 1) 0%, rgba(63, 72, 97, 1) 50%, rgba(21, 29, 50, 1) 100%)',
            }}>
                <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, mb: 2}}>
                    <Box
                        component="img"
                        src={NadinLogo}
                        alt="Nadin Logo"
                        sx={{height: 40, marginTop: '-10px'}}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                        All rights of this site are reserved for Nadin Sadr Aria Engineering Company.
                    </Typography>
                </Box>

                <div style={{display: 'flex', justifyContent: 'end'}}>
                    <Typography variant="body2" color="text.secondary">
                        contact us : info@nadin.it
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                        12:25, Monday 23 December 2023
                    </Typography>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;