import { Box, Button, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Form, useActionData, useNavigation } from "react-router-dom";
import MoonCloudMidRain from "../../assets/Moon-cloud-mid-rain.png";
import MoonCloudFastWind from "../../assets/Moon-cloud-fast-wind.png";
import SunCloudAngledRain from "../../assets/Sun-cloud-angled-rain.png";

const Login = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const navigation = useNavigation();
    const actionData = useActionData() as { error?: string } | undefined;
    const isSubmitting = navigation.state === "submitting";

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                maxWidth: 960,
                height: { xs: "auto", md: 560 },
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: theme.palette.background.default,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                mx: "auto",
                my: { xs: 4, md: 8 },
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: theme.palette.background.paper,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}
                >
                    {t("Login")}
                </Typography>

                <Form method="post" noValidate>
                    <TextField
                        name="username"
                        label={t("Enter_Your_Name")}
                        variant="outlined"
                        fullWidth
                        error={!!actionData?.error}
                        helperText={actionData?.error}
                        disabled={isSubmitting}
                        sx={{
                            mb: 3,
                            input: { color: theme.palette.text.primary },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{
                            height: 44,
                            textTransform: "uppercase",
                            fontWeight: 500,
                        }}
                    >
                        {isSubmitting ? "Entering..." : t("Login")}
                    </Button>
                </Form>
            </Box>

            {!isSmallScreen && (
                <Box
                    sx={{
                        width: "480px",
                        position: "relative",
                        bgcolor:
                            theme.palette.mode === "dark" ? "#404961" : "#D3E1E7",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        src={MoonCloudMidRain}
                        alt="Moon Cloud Mid Rain"
                        sx={{
                            position: "absolute",
                            top: "10%",
                            left: "31%",
                            height: "auto",
                        }}
                    />
                    <Box
                        component="img"
                        src={MoonCloudFastWind}
                        alt="Moon Cloud Fast Wind"
                        sx={{
                            position: "absolute",
                            top: "55%",
                            left: "31%",
                            height: "auto",
                        }}
                    />
                    <Box
                        component="img"
                        src={SunCloudAngledRain}
                        alt="Sun Cloud Angled Rain"
                        sx={{
                            position: "absolute",
                            top: "32%",
                            right: "35%",
                            height: "auto",
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

export default Login;