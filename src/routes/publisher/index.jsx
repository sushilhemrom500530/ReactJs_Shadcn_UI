import CommonLayout from "@/layouts/admin";
import { Navigate } from "react-router-dom";

const publisherRoutes = [
    {
        path: "/publisher/",
        element:<CommonLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
          
        ],
    },
];

export default publisherRoutes;
