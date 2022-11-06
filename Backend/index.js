const express=require('express')
const mongoose=require('mongoose')
const app=express();

const connectDB= async()=>{
    mongoose.connect('mongodb://localhost:27017/T-shirts')
    const productSchema=new mongoose.Schema({});
    const products=mongoose.model('products',productSchema);
    const data=await products.find();
    console.log(data);
}
 
connectDB();
app.get('/',(req,res)=>{
    res.send("Connected")
})
app.listen(8000,(req,res)=>{
    console.log("Connected");
})