import { useMutation, gql } from '@apollo/client'

const mutationLogin = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`

export const useMutationLogin = () => {
  const [mutation, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(mutationLogin)
  return { mutation, mutationData, mutationLoading, mutationError }
}
