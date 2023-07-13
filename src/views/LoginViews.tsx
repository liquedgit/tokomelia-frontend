export function LoginViews(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = await LoginController(username, password)

        if(data.token){
            localStorage.setItem('token', data.token)
            navigate('/', {replace:true})
        }
    }


    return (
        <>
            <h1>THIS IS LOGIN VIEW</h1>
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
