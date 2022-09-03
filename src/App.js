/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Context } from './Context'

// COMPONENTS
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>

        {
          isAuth
            ? <Routes>
              <Route path='/favs' element={<Favs />} />
              <Route path='/user' element={<User />} />
              </Routes>
            : <Routes>
              <Route path='/favs' element={<NotRegisteredUser />} />
              <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
        }

        <NavBar />
      </BrowserRouter>
    </>
  )
}
