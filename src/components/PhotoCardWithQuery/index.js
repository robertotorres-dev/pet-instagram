import React from 'react'
import PropTypes from 'prop-types'

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

PhotoCardWithQuery.propTypes = {
  id: PropTypes.string.isRequired
}
