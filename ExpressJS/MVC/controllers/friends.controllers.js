
const model = require("../models/friends.model")

function getFriends(req,res){
    const friendID = Number(req.params.friendID);
    const friend = model[friendID];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        })
    }
}

module.exports = {
    getFriends
}