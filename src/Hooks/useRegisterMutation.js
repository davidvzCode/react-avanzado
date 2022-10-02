import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`

export const useRegisterMutation = () => {
    const [registerMutation, { loading, data, error }] = useMutation(REGISTER)
    return { registerMutation, loading, data, error }
}
