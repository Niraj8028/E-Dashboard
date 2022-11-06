const express=require('express')
const app=express();


app.get('/',(req,res)=>{
    res.send("Connected")
})
app.listen(8000,(req,res)=>{
    console.log("Connected");
})