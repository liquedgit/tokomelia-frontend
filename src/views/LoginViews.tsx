import {FormEvent, useState} from "react";
import {LoginController} from "../Controller/AuthenticationController.tsx";


export function LoginViews(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = await LoginController(username, password)

        if(data.token){

        }
    }
    return (
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
    );
}