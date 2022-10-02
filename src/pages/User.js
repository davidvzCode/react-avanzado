import React from 'react'
import { AppContext } from '../AppContext'
import { SubmitButton } from '../components/SubmitButton'

export const User = ({ client }) => {
    const { removeAuth } = React.useContext(AppContext)
    return (
        <>
            <h2>User</h2>
            <SubmitButton
                onClick={() => removeAuth(client)}
                text="Cerrar Sesión"
            ></SubmitButton>
        </>
    )
}
