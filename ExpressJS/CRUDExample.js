const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const PORT = 3001;
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

app.get("/", (req,res)=>{
    res.send("Hi there")
})

app.get("/friends", (req,res)=>{
    res.status(200).json(friends)
})

app.post("/friends", (req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    if(!id || !name){
        res.status(400).json({
            error:"Incomplete details"
        })
    }
    const newFriend = {
        id: id,
        name: name
    };

    friends.push(newFriend)
})

app.get("/friends/:id", (req,res)=>{
    const friendId = req.params.id;
    const friendDetails = friends[friendId];
    if(!friendDetails){
        res.json({
            error:"Segmentation fault"
        })
    }
    res.json(friendDetails);
})

app.put("/friends/:id", (req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    if(!id || !name){
        res.status(400).json({
            error:"Incomplete details"
        })
    }
    const newFriend = {
        id: id,
        name: name
    };

    friends.push(newFriend)
})

app.delete("/friends/:id", (req,res)=>{
    res.status(200).json({
        "msg":"Deleted the friend successfully"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
});

