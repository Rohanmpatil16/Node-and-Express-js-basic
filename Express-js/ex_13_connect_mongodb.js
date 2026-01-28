import express from 'express'
import {MongoClient} from 'mongodb'
const app=express()

const dbName="ecomerse"
const url="mongodb://localhost:27017"

const client=new MongoClient(url)

async function dbConnection() {
    await client.connect()
    const db=client.db(dbName)
    const collection=db.collection("product")

    const result=await collection.find().toArray()
    console.log(result)
    
}
dbConnection()

app.get("/", (req, res) => {
    res.send("MongoDB + Express running");
});

app.listen(4100)