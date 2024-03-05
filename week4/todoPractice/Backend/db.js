/* 
 Todo{
    title: string;
    description: string;
    completed: boolean
 }

*/

const mongoose = require("mongoose");
// const { string } = require("zod");
mongoose.connect("mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String, 
    description: String, 
    compeleted: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}



const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/")
// mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/

const User = mongoose.model('Users', {name: String, email: String, password: String});


app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(401).send("This user already exits");
    } 

    const user = new User
    ({
        name: name, 
        email: username, 
        password: password
    })
    

    User.save();
    res.json({
        "msg":  "User created successfully"
    })
    
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})


