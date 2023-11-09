import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FadeLoader } from "react-spinners";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-[600px] flex items-center justify-center">
                <FadeLoader color="#36d7b7" />
            </div>
        );
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={{ from: location }} to='/login' replace></Navigate>
    );
};

export default PrivateRoutes;