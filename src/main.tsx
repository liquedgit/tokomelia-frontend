import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,  Route,  Routes} from 'react-router-dom'
import './index.css'
import {LoginViews} from "./views/LoginViews.tsx";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {GRAPHQL_LINK} from "./Helper/Static.tsx";
import ProtectedRoute from "./ProtectedRoute..tsx";
import HomeView from "./views/HomeView.tsx";


export const client = new ApolloClient({
    uri: GRAPHQL_LINK,
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
            </Routes>
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>,
)
