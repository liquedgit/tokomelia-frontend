import {gql} from "@apollo/client";
import {QUERY_GET_ALL_USER, QUERY_LOGIN_AUTHENTICATION} from "../Helper/Static.tsx";


export const GET_ALL_USER = gql`${QUERY_GET_ALL_USER}`

export const LOGIN_AUTH = gql`${QUERY_LOGIN_AUTHENTICATION}`
