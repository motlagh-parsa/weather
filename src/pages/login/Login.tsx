import {Box, Button, TextField, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Form, useActionData, useNavigation} from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import MoonCloudMidRain from "../../assets/Moon-cloud-mid-rain.png";
import MoonCloudFastWind from "../../assets/Moon-cloud-fast-wind.png";
import SunCloudAngledRain from "../../assets/Sun-cloud-angled-rain.png";


/* -------------------------------
   Login Component
--------------------------------*/
const Login = () => {
    const { t } = useTranslation() as { t: (key: string) => string };
    const theme = useTheme();

    // New React Router hooks
    const navigation = useNavigation();
    const actionData = useActionData() as { error?: string } | undefined;
    const isSubmitting = navigation.state === "submitting";

    /* -------------------------------
       Previous react-hook-form logic
       (Kept for reference)
    --------------------------------*/
    /*
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginForm>();

    const navigate = useNavigate();

    const onSubmit = async (data: LoginForm) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        localStorage.setItem('username', data.username);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };
    */

    return (
        <Box
            sx={{
                display: "flex",
                width: 960,
                height: 560,
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: theme.palette.background.default,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
        >
            {/* Left panel (form) */}
            <Box
                sx={{
                    flex: 1,
                    p: 6,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    bgcolor: theme.palette.background.paper,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{mb: 3, textAlign: "center", fontWeight: 600}}
                >
                    {t("Login")}
                </Typography>

                {/* New Router-based form */}
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
                            input: {color: theme.palette.text.primary},
                            marginBottom: "50%",
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

                {/* -------------------------------
          Old <form> with react-hook-form
          (Kept for fallback/testing)
        -------------------------------- */}
                {/*
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("username", {
              required: t("Please_enter_your_name"),
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            label={t("Enter_Your_Name")}
            variant="outlined"
            fullWidth
            error={!!errors.username}
            helperText={errors.username?.message}
            disabled={isSubmitting}
            sx={{
              mb: 3,
              input: { color: theme.palette.text.primary },
              marginBottom: "50%",
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
        </form>
        */}
            </Box>

            {/* Right panel (clouds) */}
            <Box
                sx={{
                    width: "454px",
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
        </Box>
    );
};

export default Login;
