const express = require("express")
const bodyParser = require("body-parser")
const app = require("./app")
const PORT = 3001;




app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})