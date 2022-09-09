import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export default () => {
  const { categoryId } = useParams()
  const HomeComponent = useMemo(() =>
    <Layout title='Tu app de mascotas' subtitle='Con esta app puedes encontrar fotos de animales domésticos'>
      <ListOfCategories />
      {categoryId
        ? <ListOfPhotoCards categoryId={categoryId} />
        : <ListOfPhotoCards />}
    </Layout>
  , [categoryId])

  return HomeComponent
}
