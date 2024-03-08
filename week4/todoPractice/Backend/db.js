/* 
 Todo{
    title: string;
    description: string;
    completed: boolean
}

*/
// mongoose.connect("mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const mongoose = require("mongoose");
// const { string } = require("zod");
mongoose.connect("mongodb+srv://Ashish:vtdz8e2lDaOARAB5@cluster0.ncmotnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("MongoDB connected sucessfully");
    })
    .catch((error) =>{
        console.error("Error connecting to MongoDB:", error)
    });


const todoSchema = mongoose.Schema({
    title: String, 
    description: String, 
    completed: {
        type: Boolean, 
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}


