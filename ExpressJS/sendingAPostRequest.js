const express = require("express")
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
const PORT = 3001;

app.get("/", (req,res)=>{
    res.send("Hi there")
})

app.post("/", (req,res)=>{
    console.log(req.body.id)
    console.log(req.body.name);
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})