import React from 'react'

// COMPONENTS
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hoc/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) return <h2>Internal Server Error</h2>
  if (loading) return <h2>Loading...</h2>

  return (
    <PhotoCard {...data.photo} />
  )
}
