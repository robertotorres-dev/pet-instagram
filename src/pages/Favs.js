import React from 'react'

// COMPONENTS
import { FavsWithQuery } from '../components/FavsWithQuery'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <>
      <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
        <FavsWithQuery />
      </Layout>
    </>
  )
}
