import React from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = () => {
  const params = useParams()
  return (
    <>
      <Layout title='Tu app de mascotas' subtitle='Con esta app puedes encontrar fotos de animales domésticos'>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={params.categoryId} />
      </Layout>
    </>
  )
}
