import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "@//context-api/user/index.jsx";

export default function PrivateRoute({ children, allowedRoles = [] }) {
    const navigate = useNavigate();
    const token = Cookies.get('authToken');
    const impersonate = Cookies.get('impersonateAuthToken');
    const { user } = useContext(UserContext);
    const userRole = user?.role?.slug;
    const location = useLocation();
    const currentLocation = location.pathname;
    const isAuthenticated = !!token && user !== null;

    // Check if the user is authorized
    const isAuthorized = allowedRoles.includes(userRole);

    // Admin access to the publisher panel condition
    const canAccessPublisherPanel = userRole === 'admin' && isAuthenticated && impersonate;

    // If authenticated and authorized, render children
    if (isAuthenticated) {
        if (isAuthorized || canAccessPublisherPanel) {
            return children;
        } else {
            return currentLocation;
        }
    }

    // If not authenticated, redirect to login page
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
}
