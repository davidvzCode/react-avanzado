import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, disabled, error }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            email: email.value,
            password: password.value,
        })
    }

    return (
        <>
            <Title>{title}</Title>
            <Form disabled={disabled || false} onSubmit={handleSubmit}>
                <Input
                    disabled={disabled || false}
                    placeholder="Email"
                    {...email}
                />
                <Input
                    disabled={disabled || false}
                    placeholder="Password"
                    type="password"
                    {...password}
                />
                <SubmitButton
                    text={title}
                    disabled={disabled || false}
                ></SubmitButton>
                {error && <Error>{error}</Error>}
            </Form>
        </>
    )
}
