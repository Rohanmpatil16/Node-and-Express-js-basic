import express from 'express'

const app=express();

app.set("view engine","ejs")

app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render('ex20_login')
})

app.post("/profile",(req,res)=>{
    res.render('ex20_profile')
})
app.listen(5500)