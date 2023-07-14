import {setJwtToken} from "../Helper/jwt.tsx";
import './css/LoginStyle.css'


export function LoginViews(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = await LoginController(username, password)

        if(data.token){

            setJwtToken(data.token)
            navigate('/', {replace:true})
        }
    }


    return (
        <>
            <NavbarComponent/>
            <form onSubmit={async(e)=>{
                await handleSubmit(e);
            }}>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </>

);
}
import {FormEvent, useState} from "react";
import {LoginController} from "../Controller/AuthenticationController.tsx";


import {useNavigate} from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent.tsx";
