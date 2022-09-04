import React from 'react'

// COMPONENTS
import { ListOfFavs } from '../ListOfFavs'
import { useGetFavs } from '../../hoc/useGetFavs'

export const FavsWithQuery = () => {
  const { loading, error, data } = useGetFavs()
  if (error) return <h2>{`${error.message}`}</h2>
  if (loading) return <h2>Loading...</h2>

  return (
    <ListOfFavs favs={data.favs} />
  )
}
