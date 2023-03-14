import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/core/Home'
import Layout from './components/core/Layout'
import Shop from './components/core/Shop'

const RouteList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/shop' element={<Shop />} />
      <Route path='/layout' element={<Layout />} />
    </Routes>

  )
}

export default RouteList
