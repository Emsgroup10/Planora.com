import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children, role}){
    //user, token, isAuthenticated
    const loginstate = useSelector(state =>state.auth)
    //Any user has logged in or not
    if(loginstate.isAuthenticated){
        return <Navigate to="/login"/>
    }

    if(loginstate.user.role !== role){
        return <Navigate to="/unauthorised"/>
    }

    return children;

}