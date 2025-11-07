import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.ts"; // adjust path if needed

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        // user is logged in → redirect to home
        return <Navigate to="/" replace />;
    }

    // otherwise, allow access (login/register/etc.)
    return <>{children}</>;
};

export default PublicRoute;
