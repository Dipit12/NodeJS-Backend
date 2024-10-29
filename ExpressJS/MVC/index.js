const express = require("express");
const bodyParser = require("body-parser");

const messagesController = require("./controllers/messages.controller")
const friendsController = require("./controllers/friends.controllers")
const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Hi there")
})

app.get("/friends", messagesController.getMessages)
// /friends/1
app.get("/friends/:friendID",friendsController.getFriends)

app.post("/friends", messagesController.postMessages)


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})