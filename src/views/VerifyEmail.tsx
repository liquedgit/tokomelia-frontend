import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {VerifyEmailController} from "../Controller/AuthenticationController.tsx";

export function VerifyEmailViews(){
    const {token} = useParams()
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        if(token){
            const VerifiedEmail = async ()=>{
                const data  = await VerifyEmailController(token)
                setLoading(false)
                if(data.errors){
                    setError(data.errors[0].message)
                }
            }

            VerifiedEmail()
        }
    }, [token])

    return(
        <>
            {isLoading && (
                <h1>...</h1>
            )}
            {error.length>0 && (
                <h1>{error}</h1>
            )}
            {(!isLoading && error.length == 0) && (
                <h1>Sucessfully activated account</h1>
            )}
        </>
    )

}