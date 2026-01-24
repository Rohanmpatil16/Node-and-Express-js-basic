import express from 'express'
import users from './users.json' with {type:'json'}
const app=express();

app.get("/",(req,res)=>{
    res.send(users)
})


app.get("/user/:id",(req,res)=>{
    const id= req.params.id
    console.log(id);
    let filterdData=users.filter((users)=>users.id==id)

    res.send(filterdData)
})
app.listen(4000)