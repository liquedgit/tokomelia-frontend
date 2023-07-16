import {setJwtToken} from "../Helper/jwt.tsx";
// import './css/LoginStyle.module.css'
import styles from './css/LoginStyle.module.css'
import {FormEvent, useState} from "react";
import {LoginController} from "../Controller/AuthenticationController.tsx";
import {useNavigate} from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent.tsx";

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

            <div className={`view-layout ${styles["custom-view-layout"]}`}>
                <div className={styles['outline-form']}>
                    <form className={"inner-form"} onSubmit={async(e)=>{
                        await handleSubmit(e);
                    }}>
                        <h1 className={`color-green ${styles["title"]}`}>Login</h1>
                        <div className={styles["form-input"]}>

                            <input
                                className={styles["input-bar"]}
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                            <input
                                className={styles["input-bar"]}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <button type="submit" className={styles["button-login"]}>Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </>

);
}

