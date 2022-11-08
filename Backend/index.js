const express=require('express')
require('./DB/config')
const cors=require('cors')
const User=require('./DB/User')

const app=express();
app.use(express.json());
app.use(cors())

app.post('/register',async(req,res)=>{
    let user= new User(req.body);
    let result=await user.save();
    res.send(result)
})
app.post('/login',async(req,res)=>{
    let user=await User.findOne(req.body);
    res.send(user);
})
app.get('/',(req,res)=>{    
    res.send("Success")
})

app.listen(8000,(req,res)=>{
    console.log("Connected");
})