const express=require('express');
const cors=require('cors');
require("./db/config");
const User=require("./db/User");
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
app.listen(5000,()=>{
    console.log(`running on port 5000`);
});