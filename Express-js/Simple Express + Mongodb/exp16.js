import express from 'express'
const app=express()
import {MongoClient} from 'mongodb'

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")


const dbName="ecomerse"
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

let collection;

async function connectdb() {
    await client.connect()
    const db=client.db(dbName)
    collection=db.collection("info")
    console.log("Mongodb Connected")
    
}
connectdb()



app.get("/",(req,res)=>{
    res.render('ex16')
})

app.post("/add",async(req,res)=>{
    const result=await collection.insertOne(req.body)
    console.log(result);
    
    const data=await collection.find().toArray()
    res.render("add2",{data})
})
app.listen(4800)