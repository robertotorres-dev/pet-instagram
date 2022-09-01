import React from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()
  return (
    <>
      <PhotoCardWithQuery id={params.detailId} />
    </>
  )
}
