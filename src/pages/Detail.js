import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

// COMPONENTS
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()
  return (
    <>
      <Layout title={`Fotografia ${params.detailId}`}>
        <PhotoCardWithQuery id={params.detailId} />
      </Layout>
    </>
  )
}
