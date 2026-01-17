import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Basic node js</h1>")
    
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about Page</h1>")
})
app.listen(1600)