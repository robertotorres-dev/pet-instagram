import React from 'react'

// COMPONENTS
import { FavsWithQuery } from '../components/FavsWithQuery'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <>
      <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
        <FavsWithQuery />
      </Layout>
    </>
  )
}
