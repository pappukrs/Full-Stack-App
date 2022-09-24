import React, { useState } from 'react'

const AddProduct = () => {
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const[error,setError]=useState(false);

    const handleAddProduct=async()=>{

        if(!name ||!price ||!category ||!company){
            setError(true);
            return false;
        }
       let payload={name,price,category,company};
       const user=JSON.parse(localStorage.getItem("user"))
       const userId=user._id
       console.log(userId,"userId");

       let result=await fetch('http://localhost:5000/add-product',{
        method: 'POST',
        body: JSON.stringify({...payload,userId}),
        headers: {'Content-Type': 'application/json'},
       })
       result=await result.json();
       console.log(result,"result");
    }
  return (
    <div className='product'>
    <h1>AddProduct</h1>
    <input type="text" placeholder="Enter Product name" value={name} onChange={(e)=>(setName(e.target.value))} className="inputbox"/>
    {error && !name && <span className='invalid-input'>Please Enter valid Product Name</span>}
    <input type="text" placeholder="Enter Product price" value={price} onChange={(e)=>(setPrice(e.target.value))} className="inputbox" />
    {error && !price && <span className='invalid-input'>Please Enter valid Product Price</span>}
    <input type="text" placeholder="Enter Product category" value={category} onChange={(e)=>(setCategory(e.target.value))} className="inputbox" />
    {error && !category && <span className='invalid-input'>Please Enter valid Product Category</span>}
    <input type="text" placeholder="Enter Product company" value={company} onChange={(e)=>(setCompany(e.target.value))} className="inputbox" />
    {error && !company && <span className='invalid-input'>Please Enter valid Product Company</span>}
    <button onClick={handleAddProduct} className="appBtn">Add Product</button>
    </div>
  )
}

export default AddProduct