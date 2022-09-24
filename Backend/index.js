const express=require('express');
const cors=require('cors');
require("./db/config");
const User=require("./db/User");
const Product=require("./db/Product");
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("homepage");
})
app.post('/register',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password
    res.send(result);
    
})
app.post('/login',async(req,res)=>{
    console.log(req.body)
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select('-password');
        if(user){
            res.send(user);
        }
        else{
            res.send({resp:"No user found"})
        }
    }
    else{
        let obj={resp:"Please enter valid email password"}
        res.send(obj);
    }  
})

app.post('/add-product',async(req,res)=>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result);
})

app.get('/product',async(req,res)=>{
    let products=await Product.find();
    if(products.length>0){
        res.send(products)
    }
    else{
        res.send({res:"No products found"});
    }
})

app.delete('/product/:id',async(req,res)=>{
    let result= await Product.deleteOne({_id:req.params.id})
    res.send(result);
})
app.get('/product/:id',async(req,res)=>{
    let result=await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }
    else{
        res.send({res:"No such record found"});
    }
})
app.patch('/update/:id',async(req,res)=>{
    let result=req.body
    product = await Product.updateOne({_id:req.params.id},{$set:{...result}});
    if(product){
        res.send(product);
    }
    else{
        res.send({res:"No such product found"});
    }
    
})
app.get('/search/:key',async(req,res)=>{
    let product=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},{company:{$regex:req.params.key}},{price:{$regex:req.params.key}},{category:{$regex:req.params.key}}
        ]
    });
    if(product){
        res.send(product);
    }
    else{
        res.send({res:"No such product found"});
    }
})
app.listen(5000,()=>{
    console.log(`running on port 5000`);
});