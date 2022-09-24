import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const UpdateProduct = () => {
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const {id}=useParams();
    const nav=useNavigate();
    console.log(id,"id");

    useEffect(() =>{
      getData();
    },[])

    const handleUpdateProduct=async()=>{
      let result=await fetch(`http://localhost:5000/update/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({name,price,category,company}),
        headers: {'Content-Type': 'application/json'}
      });
      result=result.json();

      getData();
      nav('/');
    
    }
    const getData=async()=>{
      let result=await fetch(`http://localhost:5000/product/${id}`);
      result=await result.json();
       console.log(result,"one");
       setName(result.name);
       setPrice(result.price);
       setCategory(result.category);
       setCompany(result.company);
    }
  return (
    <div className='product'>
    <h1>UpdateProduct</h1>
    <input type="text" placeholder="Enter Product name" value={name} onChange={(e)=>(setName(e.target.value))} className="inputbox"/>
    
    <input type="text" placeholder="Enter Product price" value={price} onChange={(e)=>(setPrice(e.target.value))} className="inputbox" />
    
    <input type="text" placeholder="Enter Product category" value={category} onChange={(e)=>(setCategory(e.target.value))} className="inputbox" />
    
    <input type="text" placeholder="Enter Product company" value={company} onChange={(e)=>(setCompany(e.target.value))} className="inputbox" />
   
    <button onClick={handleUpdateProduct} className="appBtn">Update Product</button>
    </div>
  )
}

export default UpdateProduct;