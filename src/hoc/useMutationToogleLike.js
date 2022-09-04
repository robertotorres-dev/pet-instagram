import { useMutation, gql } from '@apollo/client'

const mutationLikePhoto = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

export const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(mutationLikePhoto)
  return { mutation, mutationLoading, mutationError }
}
