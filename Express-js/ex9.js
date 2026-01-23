import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    const users=['rohan','apurv','vivek'];
    let data=`<ul>`
    for(let i=0;i<users.length;i++)
    {
        data+=`<li><a href="/users/${users[i]}">${users[i]}</a></li>`
        console.log(users[i])
    }
    data+=`</ul>`
res.send(data)
})
app.listen(3900)