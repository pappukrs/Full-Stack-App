import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Private = () => {
    let auth=JSON.parse(localStorage.getItem('user'));
    console.log('auth', auth);
    return  auth?<Outlet/>:<Navigate  to='/signup'/>
  
}

export default Private;