const express=require('express')
require('./DB/config')
const User=require('./DB/User')

const app=express();
app.use(express.json());

app.post('/register',async(req,res)=>{
    let user= new User(req.body);
    let result=await user.save();
    res.send(result)
})
app.get('/',(req,res)=>{    
    res.send("Success")
})

app.listen(8000,(req,res)=>{
    console.log("Connected");
})