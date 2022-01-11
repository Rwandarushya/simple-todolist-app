var express = require('express')
var cors = require('cors')
const conn = require('./connection')


//middlewares

var app = express();
app.use(cors());
app.use(express.json()); //request
app.listen(3000, ()=>{
    console.log("Server started running on the port 3000")
});


//Routes

//create todo
app.post("/todoa",async(req,res)=>{
    try {
        console.log(res.body);
    } catch (err) {
        error.log(err.message);
    }
})


//get all todos


//delete todo


//update todo





