import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import './index.css'
import {LoginViews} from "./views/LoginViews.tsx";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {GRAPHQL_LINK} from "./Helper/Static.tsx";
import ProtectedRoute from "./ProtectedRoute..tsx";
import HomeView from "./views/HomeView.tsx";
import {RegisterViews} from "./views/RegisterViews.tsx";
import {VerifyEmailViews} from "./views/VerifyEmail.tsx";


const httpLink = createHttpLink({
    uri: GRAPHQL_LINK,
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    }
})

export const client = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute/>}>
                    <Route path={'/'} element={<HomeView/>}/>
                </Route>
                <Route path={'/login'} element={<LoginViews/>}/>
                <Route path={'/register'} element={<RegisterViews/>}/>
                <Route path={'/verify/:token'} element={<VerifyEmailViews/>}/>
            </Routes>
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
)
