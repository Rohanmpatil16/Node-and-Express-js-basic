import  express from 'express'
const app=express()
import {MongoClient} from 'mongodb'

const dbName="ecomerse"
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

app.set("view engine",'ejs')

app.get("/",(req,res)=>{
    res.send("display database data")
})

app.get("/data",async(req,res)=>{
    await client.connect()
    const db=client.db(dbName)
    const collection=db.collection("info")

    const result=await collection.find().toArray()
    console.log(result)

  
    res.render('ex14.ejs',{result})

})
app.listen(4200)