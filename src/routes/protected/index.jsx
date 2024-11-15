import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { UserContext } from "@//context-api/user/index.jsx";
import { ToastAction } from "@//components/ui/toast.jsx";
import { toast } from "sonner";

export default function ProtectedRoute({ element }) {
    const navigate = useNavigate();
    const token = Cookies.get('authToken');
    const { user } = useContext(UserContext);
    const userRole = user?.role?.slug;

    useEffect(() => {
        if (token) {
            if (userRole === "admin") {
                navigate("/admin");
            } else if (userRole === "publisher") {
                navigate("/publisher");
            } else {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
                navigate("/error");
            }
        }
    }, [token, userRole, navigate]);

    if (!token) {
        return element;
    }
}
