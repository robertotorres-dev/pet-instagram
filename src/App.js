/* eslint-disable react/jsx-indent */
import React, { Suspense, useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Context } from './Context'

// COMPONENTS
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:categoryId' element={<Home />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
          <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
    </>
  )
}
