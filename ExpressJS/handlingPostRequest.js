const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const friends = [
    {
        id:0,
        name:"Dipit Madan"
    },
    {
        id:1,
        name:"Random person 1"
    },
    {
        id:2,
        name:"Random Person 3"
    }
];
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Hi there")
})

app.get("/friends", (req,res)=>{
    res.json(friends)
})
// /friends/1
app.get("/friends/:friendID", (req,res)=>{
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        })
    }
})

app.post("/friends", (req,res)=>{
    const friendID = req.body.id;
    const friendName = req.body.name;
    if(!friendID || !friendName){
        res.status(400).json({
            error:"Missing friend values"
        })
    }
    const newFriend = {
        name: friendName,
        id: friendID
    }
    friends.push(newFriend);
    console.log("New friend added");
    res.status(201).json({
        "msg":"Friend added"
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})