
import axios from "axios";
import {GRAPHQL_LINK, QUERY_LOGIN_AUTHENTICATION} from "../Helper/Static.tsx";

// export class LoginResponse{
//     private token : string | null;
//     private message : string;
//
//     constructor(token : string |null, message : string) {
//         this.token = token
//         this.message = message
//     }
//
//     getToken() : string | null {
//         return this.token
//     }
//
//     setToken(token : string) : void{
//         this.token = token
//     }
//
//     getMessage() : string{
//         return this.message
//     }
//
//     setMessage(message : string) : void{
//         this.message = message
//     }
//
// }


export interface ResponseLogin{
    token : string | null
    message : string
}
export async function AuthenticateLogin(username : string, password :string) {

    try {
        const response = await axios.post(GRAPHQL_LINK, {
            query: QUERY_LOGIN_AUTHENTICATION,
            variables: {
                username: username,
                password : password
            },
        });

        return response.data

    } catch (err) {
        console.error(err)
        throw new Error('Failed to fetch data!');
    }
}