import express from 'express';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./upload")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    },
})

app.get("/",(req,res)=>{
    res.send(`
        
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile"/>
        <button>Upload</button>
    </form>
    `)

})
const upload = multer({storage})

app.post("/upload",(req,res,next)=>{
    upload.single('myfile')(req,res,(err)=>{
        if(err){
            return res.status(500).send({message:"Error uploading file",error:err})
        }
        res.send({
            message:"File uploaded successfully",
            file:req.file
        })
    })
})
app.listen(5300)