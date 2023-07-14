import {Navigate, Outlet} from "react-router-dom";
import {getJwtToken} from "./Helper/jwt.tsx";

const ProtectedRoute = ()=>{
    const auth = getJwtToken()
    return auth ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectedRoute