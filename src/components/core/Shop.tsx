import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Layout from './Layout'

// type Props = {}

export default function Shop() {
  const navigate = useNavigate()
  const onClick = () =>{
    navigate('/shop/shop1')
  }
  return (
    <div>
      <Layout>
        <div onClick={onClick}>
          我是大神仙
        </div>
      </Layout>
      <Outlet />
    </div>
  )
}