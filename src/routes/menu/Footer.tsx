import {useEffect, useState} from "react";
import {Box, Typography, useTheme, Divider, Stack, Link,} from "@mui/material";
import NadinLogo from "../../assets/nadin-logo.png";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Footer = () => {
    const theme = useTheme();
    const [dateTime, setDateTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            setDateTime(now.toLocaleString("en-GB", options));
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            component="footer"
            sx={{
                mt: 6,
                pt: 3,
                pb: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                backgroundImage:
                    theme.palette.mode === "light"
                        ? "linear-gradient(90deg, rgba(243,250,254,1) 0%, rgba(204,221,221,1) 50%, rgba(243,250,254,1) 100%)"
                        : "linear-gradient(90deg, rgba(41,47,69,1) 0%, rgba(63,72,97,1) 50%, rgba(21,29,50,1) 100%)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    px: {xs: 2, md: 6},
                }}
            >
                {/* Left side: Logo + company name */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                        component="img"
                        src={NadinLogo}
                        alt="Nadin Logo"
                        sx={{
                            height: 40,
                            filter:
                                theme.palette.mode === "dark" ? "brightness(1.2)" : "none",
                        }}
                    />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{maxWidth: 400, whiteSpace: 'nowrap'}}
                    >
                        All rights of this site are reserved for Nadin Sadr Aria Engineering Company.
                    </Typography>
                </Stack>

                <Divider
                    sx={{
                        my: 1,
                        display: {xs: "block", md: "none"},
                        width: "100%",
                        borderColor: theme.palette.divider,
                    }}
                />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{flexWrap: "wrap", justifyContent: "center"}}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <MailOutlineIcon fontSize="small" color="action"/>
                        <Link
                            href="mailto:info@nadin.it"
                            color="text.secondary"
                            underline="hover"
                            variant="body2"
                        >
                            contact us: info@nadin.it
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <CalendarMonthIcon fontSize="small" color="action"/>
                        <Typography variant="body2" color="text.secondary">
                            {dateTime}
                        </Typography>
                    </Stack>

                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
