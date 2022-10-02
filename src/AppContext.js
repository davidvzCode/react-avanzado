import React, { createContext, useState } from 'react'
const AppContext = createContext(null)

const AppProvider = (props) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })
    const value = {
        isAuth,
        activateAuth: (token) => {
            setIsAuth(true)
            window.sessionStorage.setItem('token', token)
        },
        removeAuth: (client) => {
            setIsAuth(false)
            window.sessionStorage.removeItem('token')
            client.resetStore()
        },
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
