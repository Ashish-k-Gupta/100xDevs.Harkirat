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