import React from 'react'
import {Navigate , useLocation , Outlet} from "react-router-dom"
import useAuth from '../hook/useAuth'

const RequireAuth = () => {
  const {auth} = useAuth()
  const location = useLocation()
  return (
    auth?.status ? <Outlet/> : <Navigate to = "/login" state = {{from : location}}  replace/>
  )
}

export default RequireAuth
