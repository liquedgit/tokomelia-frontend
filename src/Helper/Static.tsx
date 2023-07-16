export const GRAPHQL_LINK = "http://localhost:9785/query"
export const QUERY_LOGIN_AUTHENTICATION = `query LoginAuth($username : String!, $password : String!){
  LoginAccount(username: $username, password:$password){
    message
    token
  }
}`

export const QUERY_GET_ALL_USER = `query GetAllUser{
  GetAllUser{
    id
    username
    email
  }
}`

export const MUTATION_CREATE_USER = `mutation CreateUser($inputUser : NewUser!){
  createNewUser(input : $inputUser){
    username
  }
}`

export const JWT_SECRET_TOKEN = import.meta.env.VITE_JWT_SECRET_TOKEN

export const ROLE_ADMIN = 'admin'
export const ROLE_USER = 'user'