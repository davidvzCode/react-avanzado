import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HelmetProvider } from 'react-helmet-async'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    ApolloLink,
    from,
    HttpLink,
} from '@apollo/client'
import { AppProvider } from './AppContext'
import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
        headers: {
            authorization,
        },
    })

    return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
    if (networkError && networkError.code === 'invalid_token') {
        sessionStorage.removeItem('token')
        window.location = '/user'
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorMiddleware,
        authMiddleware,
        new HttpLink({
            uri: 'https://petgram-vz-davidvzcode.vercel.app/graphql',
        }),
    ]),
})

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <AppProvider>
            <ApolloProvider client={client}>
                <HelmetProvider>
                    <App client={client} />
                </HelmetProvider>
            </ApolloProvider>
        </AppProvider>
    </React.StrictMode>
)
