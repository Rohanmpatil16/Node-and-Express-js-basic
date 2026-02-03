import express from "express";
import mongoose from "mongoose";
import studentModel from "./model/ex18_model.js";

const app = express();

async function connectionDB() {
await mongoose.connect("mongodb://localhost:27017/student")
  console.log("Connected to MongoDB");    
}
connectionDB();



app.get("/", async (req, res) => {
    const students = await studentModel.find();
    res.send(students)
})
app.listen(5000)