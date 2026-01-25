import express from 'express'

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

const users=[{id:1,name:"Rohan",age:20},
    {id:2,name:"Shruti",age:21}];

app.get("/user",(req,res)=>{
    res.json(users)
})

app.get("/user/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find(u=>u.id===id)

    if(!user){
        return res.status(404).json({msssage:"user not found"})
    }
    res.json(user)
})

app.listen(4000,()=>{
    console.log("api is runnsing")
})