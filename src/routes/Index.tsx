import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./menu/Layout";
import Login from "../pages/login/Login";
import { loginAction } from "../pages/login/LoginAction";
import Home from "../pages/home/Home.tsx";
import ProtectedRoute from "./routeAccess/ProtectedRoute.tsx";
import PublicRoute from "./routeAccess/PublicRoute.tsx";
import { NotFound } from "./menu/NotFound.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            {/* Public routes (not for logged-in users) */}
            <Route
                path="login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
                action={loginAction}
            />

            {/* Protected routes (only for logged-in users) */}
            <Route
                index
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);