import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import UserRegister from '../Pages/Auth/UserRegister'
import UserLogin from '../Pages/Auth/UserLogin'
import AboutMovie from '../Pages/AboutMovie'
import Booking from '../Pages/Booking'
import PNF from '../Pages/PNF'
import MovieList from '../Pages/MovieList'


function Roots() {

  return (
    <div>
      <Routes>
        <Route path='' element={<LandingPage/>} />
        <Route path='/userRegister' element={<UserRegister/>} />
        <Route path='/userLogin' element={<UserLogin/>} />
        <Route path='/aboutMovie/:id' element={<AboutMovie/>} />
        <Route path='/booking/:id' element={<Booking/>} />
        <Route path='/moviesList' element={<MovieList/>} />
        <Route path='*' element={<PNF/>} />
      </Routes>
    </div>
  )
}

export default Roots