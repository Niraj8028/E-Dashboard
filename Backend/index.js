const express=require('express')
require('./DB/config')
const app=express();





app.listen(8000,(req,res)=>{
    console.log("Connected");
})