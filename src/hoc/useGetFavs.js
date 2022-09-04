import { useQuery, gql } from '@apollo/client'

const getFavs = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const useGetFavs = () => {
  const { loading, error, data } = useQuery(getFavs, { fetchPolicy: 'cache-and-network' })
  return { loading, error, data }
}
