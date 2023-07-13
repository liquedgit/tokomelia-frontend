import {AuthenticateLogin, ResponseLogin} from "../Model/Login.tsx";

export async function LoginController(username : string, password : string){
    const data = await AuthenticateLogin(username, password)

    if(data.data != null){
        const loginresponse : ResponseLogin = {
            message : data.data.LoginAccount.message,
            token   : data.data.LoginAccount.token
        }
        localStorage.setItem("Authorization", data.data.LoginAccount.message)
        return loginresponse
    }

    const loginresponse : ResponseLogin = {
        message : "Login Failed",
        token : null
    }
    return loginresponse
}