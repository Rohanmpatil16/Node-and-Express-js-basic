import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/error",(req,res,next)=>{
    const error=new Error('')
    error.status=404;
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("try after some time")
})
app.listen(3500);