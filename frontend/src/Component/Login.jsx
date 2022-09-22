import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   const nav=useNavigate();

    const handleLogin=async()=>{
      let payload={email,password};
      console.log(payload,"payload")
      let res=await fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
      })
      res=await res.json();
      console.log(res);
      if(res.email && res.name){
        localStorage.setItem('user',JSON.stringify(res));
       nav('/');
      }
      else{
        alert("Please enter a valid details");
      }
    }
  return (
    <div className='login'>
          <h1>Login</h1>
          <input type='text' className='login-input-box' placeholder='Enter email' value={email} onChange={(e)=>(setEmail(e.target.value))} />
          <input type='text' className='login-input-box' placeholder='Enter Passeord' value={password} onChange={(e)=>(setPassword(e.target.value))} />
          <button type='submit' className='loginbtn' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login