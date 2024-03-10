/* const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("MongoDB connected sucessfully");
    })
    .catch((error) =>{
        console.error("Error connecting to MongoDB:", error)
    });


    const todoSchema = mongoose.Schema({
        title: string, 
        description: string, 
        completed: boolean
    })

    const todo = mongoose.model('todos', todoSchema)

    module.exports ={
        todo: todo
    } */


    const mongoose = require("mongoose");
const { default: errorMap } = require("zod/lib/locales/en");
    mongoose.connect("")
        .then(() =>{
            console.log("Your server is connected to MongoDB")
        })
        .then((error) =>{
            console.log("There was an error, while connecting to MongoDB")
        })

    const todoSchema = mongoose.Schema({
        title: string, 
        description: string, 
        completed: boolean
    })

    const todo = mongoose.model('todos', todoSchema)

    module.exports = {
        todo: todo
    }

    week4\todoMyOwn1\.gitignore