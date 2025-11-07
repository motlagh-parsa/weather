import {IconButton, Menu, MenuItem, Divider, ListItemText, Box,} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";

const SettingsMenu = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const { isAuthenticated, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl as boolean);
    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Box>
            <IconButton onClick={handleOpen} color="inherit">
                <SettingsIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem disableRipple>
                    <ThemeToggle />
                </MenuItem>

                <MenuItem disableRipple>
                    <LanguageSelector />
                </MenuItem>

                {isAuthenticated && (
                    <>
                        <Divider />
                        <MenuItem onClick={logout} sx={{direction: 'ltr'}}>
                            <LogoutIcon fontSize="small" />
                            <ListItemText sx={{ ml: 1, display:'flex', justifyContent:'start'}}>{t("logout")}</ListItemText>
                        </MenuItem>
                    </>
                )}
            </Menu>
        </Box>
    );
};

export default SettingsMenu;