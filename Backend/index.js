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
    result=result.toObject();
    delete result.password;
    res.send(result)
})
app.post('/login',async(req,res)=>{
    let user=await User.findOne(req.body).select("-password");
    if(req.body.email && req.body.password){
        if(user){
            res.send(user);
        }
        else{
            res.send({Result:"No user Found"})
        }
    }
    else{
        res.send({Result:"No user Found"})
    }
    
    
})
app.get('/',(req,res)=>{    
    res.send("Success")
})

app.listen(8000,(req,res)=>{
    console.log("Connected");
})