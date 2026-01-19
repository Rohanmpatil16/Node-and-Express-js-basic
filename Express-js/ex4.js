import express from 'express'
const app=express();
import path from 'path'

app.get("/",(req,res)=>{
    const abs=path.resolve('view_absolute/home.html');
    res.sendFile(abs)
})

app.get("/login",(req,res)=>{
    const abs=path.resolve('view_absolute/login.html');
    res.sendFile(abs)
})

app.get("/abou",(req,res)=>{
    const abs=path.resolve('view_absolute/abou.html');
    res.sendFile(abs)
    
})
app.listen(3200)