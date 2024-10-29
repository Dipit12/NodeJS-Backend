const express = require("express");
const path = require("path")

const app = express();

app.get("/", (req,res)=>{
    
    res.sendFile(path.join(__dirname,"../ExpressJS", "public", "skimountain.jpg"))
})

app.listen(3002, ()=>{
    console.log(`Listening on port 3002`)
})