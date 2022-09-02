import { useMutation, gql } from '@apollo/client'

const mutationRegister = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

export const useMutationRegister = () => {
  const [mutation, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(mutationRegister)
  return { mutation, mutationData, mutationLoading, mutationError }
}
