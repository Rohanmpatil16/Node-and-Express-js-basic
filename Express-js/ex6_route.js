import express from 'express'
const app=express();

function routmiddel(req,res,next){
    console.log(req.query.age)

    if(!req.query.age ||req.query.age<18)
    {
        res.send("You are not allowed")
    }
    else{
        next()
    }
}

app.get("",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/about",routmiddel,(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.listen(3400)