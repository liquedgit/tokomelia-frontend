import {Navigate, Outlet} from "react-router-dom";
import {JWT_SECRET_TOKEN} from "./Helper/Static.tsx";
import jwt from 'jsonwebtoken'

const useAuth = ()=>{
    const SECRET_TOKEN = JWT_SECRET_TOKEN
    const token = localStorage.getItem('token')
    try{
        if(token && SECRET_TOKEN){
            const decodedToken = jwt.verify(token, SECRET_TOKEN)
            console.log(decodedToken);
        }

    }catch (err){
        console.error(err);
    }

    return true
}

const ProtectedRoute = ()=>{
    const auth = useAuth()
    return auth ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectedRoute