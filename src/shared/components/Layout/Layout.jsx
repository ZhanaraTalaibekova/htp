import React from 'react'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
