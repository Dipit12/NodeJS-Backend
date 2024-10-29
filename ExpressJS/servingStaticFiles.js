const express = require("express");
const path = require("path")

const app = express();
app.use(express.static('public')) // middleware to serve frontend

app.get("/", (req,res)=>{
    res.render("index.html")
    
})

app.listen(3002, ()=>{
    console.log(`Listening on port 3002`)
})