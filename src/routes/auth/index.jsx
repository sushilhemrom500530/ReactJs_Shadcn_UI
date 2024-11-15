import {Navigate} from "react-router-dom";
import AuthLayout from "../../layouts/auth";

const authRoutes = [
    {
        path: "/auth/",
        element: <AuthLayout/>,
        children: [
            {
                path: "",
                element: <Navigate replace to="login" />,
            },
            
        ],
    },
];

export default authRoutes;
