const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
module.exports = app;
app.use(express.json())


/* let allTasks = [];

class task{
    constructor(title, description){
        this.title = "Buy Groceries";
        this.description = "Milk, oats, pulses, rice, cooking oil";
    }
}
 */

const tasks = [
    {
        title: 'Buy Groceries',
        description: 'Milk, Oats, Pulses, Rick, Cooking Oil', 
        id: Math.floor(Math.random() * Date.now()).toString(16)
        // id: "1"
    },

    {
        title: 'Car Service',
        description: 'Change Oil, Change break pads, Clean Matt', 
        id: Math.floor(Math.random() * Date.now()).toString(16)
        // id: "2"
    },

];



app.get("/tasks", function(req, res){

    for(let i = 0; i < tasks.length; i++){
    }
    res.status(200).json({tasks});

})


app.get("/tasks/:id", function(req, res){
    const id = req.params.id;

    const todo = tasks.find(item => item.id === id);

    if(todo){
        res.status(200).json(todo);
    }else{
        res.status(404).json({error: 'Todo item not found'});
    }
});


/* 
app.post("/tasks", function (req, res){
    const {title, description, ID} = req.body;
    // const ID = Math.floor(Math.random() * Date.now()).toString(16);
    const newTask = {title, description, ID}
    tasks.push(newTask);
    res.json(newTask);
})

 */







const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
}); 

