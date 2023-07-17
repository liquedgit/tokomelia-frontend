import {AuthenticateLogin, ResponseLogin} from "../Model/Login.tsx";
import {RegisterUser, VerifyEmail} from "../Model/Register.tsx";

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

export async function RegisterController(username : string, password :string, confirmPassword : string, email : string){
    const data = await RegisterUser(username, password, confirmPassword, email)
    return data;
}

export async function VerifyEmailController(token : string){
    const data = await VerifyEmail(token)
    return data
}