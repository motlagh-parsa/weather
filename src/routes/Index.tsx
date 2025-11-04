import {createBrowserRouter, createRoutesFromElements, Route, redirect,} from "react-router-dom";
import Layout from "./menu/Layout";
import Login from "../pages/login/Login";
import {loginAction} from "../pages/login/LoginAction";
import Home from "../pages/home/Home.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

// Optional loader version for redirects if needed
export const requireAuthLoader = async () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) throw redirect("/login");
    return null;
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="login" element={<Login/>} action={loginAction}/>

            <Route
                index
                element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }
            />
        </Route>
    )
);
