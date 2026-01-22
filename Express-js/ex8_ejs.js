import express from 'express'
const app=express();

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));

app.get("/add",(req,res)=>{

    res.render("addUser")

})

app.post("/submitUser",(req,res)=>{
   console.log(req.body)
    res.render("submitUser",req.body)
})
app.listen(3800)