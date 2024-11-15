import {createBrowserRouter, Navigate} from "react-router-dom";
import authRoutes from "./auth";
import adminRoutes from "./admin";
import publisherRoutes from "@//routes/publisher/index.jsx";
import NotFound from "../components/not-found";

const routes = [
    {
        path: "",
        element: <Navigate replace to="/auth" />
    },{
      path:"*",
      element:<NotFound/>
    },
    ...authRoutes,
    ...adminRoutes,
    ...publisherRoutes


]

const router = createBrowserRouter(
    routes
);

export default router;
