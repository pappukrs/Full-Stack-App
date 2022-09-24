import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const nav=useNavigate();

   const handleRegister=async()=>{
    let payload={name,email,password};
    let result=await fetch('http://localhost:5000/register',{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json"
        }
    })
    result=await result.json()
    localStorage.setItem('user',JSON.stringify(result));
    nav('/login');
   }
useEffect(() => {
    let auth=JSON.parse(localStorage.getItem('user'));
    if(auth){
        nav('/login')
    }
}, []);

  return (
    <div className='register'>
        <h1 style={{padding: "10px"}}>Register</h1>
        <input className='inputbox' type="text" value={name} onChange={(e)=>(setName(e.target.value))} placeholder="Enter Name"/>
        {/* <span>Enter name</span> */}
        <input className='inputbox' type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Enter Email"/>
        {/* <span>Enter Email</span> */}
        <input className='inputbox' type="text" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Enter Password"/>
        {/* <span>Enter password</span> */}
        <button className='appBtn' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Signup