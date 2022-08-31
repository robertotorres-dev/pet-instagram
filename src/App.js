/* eslint-disable react/jsx-indent */
import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// COMPONENTS
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pet/:id' element={<Home />} />
              </Routes>
            </BrowserRouter>
            )

      }
    </>
  )
}
