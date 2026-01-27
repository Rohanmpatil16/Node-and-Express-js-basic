import express from 'express'

const app=express();
app.use(express.json());

let products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mobile",price:10000}
];

app.get("/products",(req,res)=>{
    res.send("Product API Running");
})

app.get("/product/:id",(req,res)=>{
    const id=Number(req.params.id)
    const product=products.find(p=>p.id===id)

    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.json(product)
})