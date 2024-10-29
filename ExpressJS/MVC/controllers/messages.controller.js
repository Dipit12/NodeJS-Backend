
const getMessages = (req,res)=>{
    res.send("<h1> Hello Dipit </h1>")
}

const postMessages = (req,res)=>{
    console.log("Updating messages....")
}

module.exports = {
    getMessages,
    postMessages
}