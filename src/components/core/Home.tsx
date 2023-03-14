import React from 'react'
import { useSelector } from 'react-redux'

// type Props = {}

export default function Home() {
  const state = useSelector(state=>state)
  return (
    <div>
        Home{JSON.stringify(state)}

    </div>
  )
}