import CommonLayout from "@/layouts/admin";
import { Navigate } from "react-router-dom";


const adminRoutes = [
    {
        path: "/admin/",
        element: <CommonLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard"/>,
            },
            {
                path: "dashboard",
                element: <h1>Dahsboard</h1>,
            },
           
        ],
    },
];

export default adminRoutes;
