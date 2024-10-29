
// We are using handlebarJS - hbs as the templating engine\

const express = require("express");
const path = require("path")

const app = express();
app.set("view engine", "hbs")
app.set("views", path.join(__dirname,'views'))

// app.use(express.static('public')) // middleware to serve frontend

app.get("/", (req,res)=>{
    res.render("index1.hbs", {
        title:"My Title",
        caption: "This is heading",
        para : "This is the paragraph"
    })
})

app.listen(3002, ()=>{
    console.log(`Listening on port 3002`)
})