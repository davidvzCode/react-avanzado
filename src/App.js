import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
//import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'
import { AppContext } from './AppContext'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = ({ client }) => {
    const { isAuth } = React.useContext(AppContext)

    return (
        <>
            <React.Suspense fallback={<div />}>
                <GlobalStyle />
                <Logo />
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/pet/:categoryId"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/detail/:detailId"
                            element={<Detail />}
                        ></Route>

                        <Route
                            exact
                            noThrow
                            path="/favs"
                            element={isAuth ? <Favs /> : <NotRegisteredUser />}
                        />
                        <Route
                            exact
                            noThrow
                            path="/user"
                            element={
                                isAuth ? (
                                    <User client={client} />
                                ) : (
                                    <NotRegisteredUser />
                                )
                            }
                        />
                    </Routes>

                    <NavBar />
                </BrowserRouter>
            </React.Suspense>
        </>
    )
}
