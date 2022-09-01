/* eslint-disable react/jsx-indent */
import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// COMPONENTS
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Logo />
      <Routes>
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:categoryId' element={<Home />} />
      </Routes>
      <NavBar />
      </BrowserRouter>
    </>
  )
}
