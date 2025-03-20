const express=require("express");
const mongoose=require("mongoose")

const app=express();

const DB=`mongodb+srv://malavrohit1620:rohit@1Github@cluster0.uzeev.mongodb.net/mernStack-1?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(DB,{
     useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
      console.log("mongoDB atlas connected");
      
}).catch((err)=>{
      console.log("mongoDB atlas not connected",err);
      
})




const middleware=(req,res,next)=>{
     console.log("this is a middleware");
    //  res.send("ye middle ware hai")
    next()
}

app.get("/",(req,res)=>{
    res.send("This is Home page")
})

app.get("/product",middleware,(req,res)=>{
    res.send("product page");
    console.log("product page");
    
})

app.get("/signup",(req,res)=>{
    res.send("signup page");
    console.log("signup page");
    
})

app.listen(3000,()=>{
    console.log("Port: ",3000,"is running")
})