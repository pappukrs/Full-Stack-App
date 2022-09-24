import React, { useEffect ,useState} from 'react'
import {Link} from 'react-router-dom'

const Product = () => {

    const[products,setProducts]=useState([]);
    
    useEffect(()=>{
        getproducts();
    },[]);

    const getproducts =async()=>{
       
        let result=await fetch('http://localhost:5000/product');
        result=await result.json();
        setProducts([...result]);
        console.log(result,"result");
        console.log(products,"product")
    }

    const deleteOne=async(id)=>{
      console.log(id,"id")
      let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete",
      })
      result=await result.json();
      if(result){
        alert("deleted");
        getproducts();
      }
    //   console.log(result,'result');
    }

    const handleSearch=async(event)=>{
      let key =event.target.value;
      let result=await fetch(`http://localhost:5000/search/${key}`);
      result=await result.json();
      setProducts([...result]);

    }

  return (
    <div className='product-list'>
    <h3>Product</h3>
    <input type="text" className="productSearch" placeholder="Search for products..."  onChange={(e)=>(handleSearch(e))} />
    <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
    </ul>
    {products.length>0?products.map((ele,idx)=>{
        return (<>
            <ul key={idx}>
        <li >{idx+1}</li>
        <li >{ele.name}</li>
       <li >{ele.company}</li>
        <li >{ele.category}</li>
        <li >{ele.price}</li>
        <li >
        <button className='deleteBtn' onClick={()=>deleteOne(ele._id)}>Delete</button>
        <Link to={`update/${ele._id}`}>Update</Link>
        </li>
    </ul>
        </>)
    })
    :<h1>No such products found</h1>}
    
    </div>
  )
}

export default Product