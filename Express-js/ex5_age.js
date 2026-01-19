import express from 'express'
const app=express();

function ageCheck(req,res,next){
    if(!req.query.age || req.query.age<18)
    {
        res.send("You cannot access this page")
    }
    else{
        next();
    }
}

app.use(ageCheck)

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.listen(3300)