import styles from './css/RegisterStyle.module.css'
import {FormEvent, useState} from "react";
import { RegisterController} from "../Controller/AuthenticationController.tsx";
import {useNavigate} from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent.tsx";

export function RegisterViews(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = await RegisterController(username,password,confirmPassword,email)
        if(data.data){
            navigate("/login", {replace:true})
        }
    }


    return (
        <>
            <NavbarComponent/>

            <div className={`view-layout ${styles["custom-view-layout"]}`}>
                <div className={styles["outline-form"]}>
                    <form onSubmit={async(e)=>{
                        await handleSubmit(e);
                    }}>
                        <h1 className={`color-green ${styles['title']}`}>Register</h1>
                        <div className={styles['form-input']}>

                            <input
                                className={styles['input-bar']}
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                            <input
                                className={styles['input-bar']}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <input
                                className={styles['input-bar']}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <input
                                className={styles['input-bar']}
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />
                            <button type="submit" className={styles['button-register']}>Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </>

    );
}

