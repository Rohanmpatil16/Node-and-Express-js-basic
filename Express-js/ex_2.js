import express from "express";
import about from "./ex_s2.js";
import {contact} from "./ex_s2.js";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>First page</h1>");
});

app.get("/about", (req, res) => {
    res.send (about()) ;
});
app.get("/contact",(req,res)=>{
    res.send(contact());

});
app.listen(1601, () => {
    console.log("Server running on port 1601");
});
