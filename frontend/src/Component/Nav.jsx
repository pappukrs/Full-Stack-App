import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
  let auth=JSON.parse(localStorage.getItem('user'));
  const nav=useNavigate();
  const hadleLogout=() => {
   localStorage.clear();
   nav('/signup');
  }
  return (
    <div>
        
        {auth?<ul className='nav-ul'>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
            <li><Link onClick={hadleLogout} to='/signup'>Logout({auth.name})</Link></li>
        </ul>
        :<ul className='nav-ul' style={{textAlign:"right"}}>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
        }
    </div>
  )
}

export default Nav