const express = require("express");

const app = express();

const PORT = 3000;
app.get('/',(req,res)=>{
    res.send("Hi there")
})
app.get("/messages", (req,res)=>{
    res.send("<h1>Welcome to the messages page</h1>")
})
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})