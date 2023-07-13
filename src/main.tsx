import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './index.css'
import {LoginViews} from "./views/LoginViews.tsx";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {GRAPHQL_LINK} from "./Helper/Static.tsx";

const router = createBrowserRouter([
    {path: '/login',
    element: <LoginViews/>}
])

export const client = new ApolloClient({
    uri: GRAPHQL_LINK,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router}/>
      </ApolloProvider>
  </React.StrictMode>,
)
