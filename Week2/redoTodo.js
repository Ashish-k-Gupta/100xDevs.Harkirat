const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
module.exports = app;
app.use(express.json())



const tasks = [
    {
        Title: "Buy Groceries", 
        Description: "Buy oats & pulses", 
        Id: Math.floor(Math.random() * Date.now()).toString(16)
    }, 
    {
        Title: "Buy Milk", 
        Description: "Mother-dairy", 
        Id: Math.floor(Math.random() * Date.now()).toString(16)
    }
]


app.get("/todos", (req, res) =>{
    res.status(200).send(tasks)
})


app.get("/todos/:id", (req, res) =>{
    const  Id = req.params.id;
    const todo = tasks.find(item => item.Id === Id);

    if(todo){
        res.status(200).json(todo);
    }else{
        res.status(404).json({error: 'Todo item not found'})
    }
});


app.post("/todos", (req, res) =>{
    const newTodo = req.body;
    const newId = Math.floor(Math.random() * Date.now()).toString(16);
    
})












app.post("/todos", (req, res) =>{
    const newTodo = req.body;
    const newId = Math.floor(Math.random() * Date.now()).toString(16)
    console.log(newId);
    newTodo.id = newId;
    tasks.push(newTodo);
    res.status(201).json({Id: newId})
})


app.get("/todos/:id", (req, res) =>{
    const id = req.params.id;

})










const PORT = 3007;
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})