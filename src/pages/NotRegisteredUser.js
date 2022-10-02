import React from 'react'
import { AppContext } from '../AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../Hooks/useRegisterMutation'
import { useLoginMutation } from '../Hooks/useLoginMutation'

export const NotRegisteredUser = () => {
    const { activateAuth } = React.useContext(AppContext)
    const { registerMutation, loading, error } = useRegisterMutation()
    const {
        loginMutation,
        loading: loadingLogin,
        error: errorLogin,
    } = useLoginMutation()

    const onSubmit = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }

        registerMutation({ variables }).then((data) => {
            const { signup } = data.data
            activateAuth(signup)
        })
        // .catch((res) => {
        //     // const errors = res.graphQLErrors.map((error) => {
        //     //     return error.message
        //     // })
        //     // console.log(errors)
        // })
    }

    const onLogin = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        loginMutation({ variables }).then((data) => {
            const { login } = data.data
            activateAuth(login)
        })
    }

    const errorMsg = error && 'El usuario ya existe o hay algún problema.'
    const errorMsgLogin = errorLogin && 'Ha ocurrido un error al iniciar sesión'
    return (
        <>
            <UserForm
                disabled={loading}
                error={errorMsg}
                title="Registrarse"
                onSubmit={onSubmit}
            />
            <UserForm
                disabled={loadingLogin}
                error={errorMsgLogin}
                title="Iniciar sesion"
                onSubmit={onLogin}
            />
        </>
    )
}
