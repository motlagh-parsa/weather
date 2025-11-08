import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./menu/Layout";
import {loginAction} from "../pages/login/LoginAction";
import ProtectedRoute from "./routeAccess/ProtectedRoute.tsx";
import PublicRoute from "./routeAccess/PublicRoute.tsx";
import {NotFound} from "./menu/NotFound.tsx";
import {lazy} from "react";

const Login = lazy(() => import("../pages/login/Login"));
const Home = lazy(() => import("../pages/home/Home.tsx"));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route
                path="login"
                element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }
                action={loginAction}
            />

            <Route
                index
                element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
);