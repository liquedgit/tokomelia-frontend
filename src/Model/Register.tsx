import axios from "axios";
import {GRAPHQL_LINK, MUTATION_CREATE_USER, MUTATION_VERIFY_EMAIL} from "../Helper/Static.tsx";

export async function RegisterUser(username : string, password : string, confirmPassword : string, email : string){

    const inputUserobj = {
        userId: "CU001",
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        role: "user"
    }
    try{
        const response = await axios.post(GRAPHQL_LINK,{
            query : MUTATION_CREATE_USER,
            variables : {
                inputUser : inputUserobj
            },
        })
        return response.data
    }catch (err){
        console.error(err);
    }
}

export async function VerifyEmail(token :string){
    try{
        const response = await axios.post(GRAPHQL_LINK, {
            query : MUTATION_VERIFY_EMAIL,
            variables : {
                token : token
            }
        })
        console.log(response)
        return response.data
    }catch (err){
        console.error(err)
    }
}