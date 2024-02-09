const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { param } = require('./redoTodo');
const app = express();
module.exports = app;
app.use(express.json())




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

    let data = JSON.stringify(tasks);
    
    fs.writeFile('database.txt',data, (err) =>{
        if(err){
            console.log(err)
            res.status(500).send('Internal Server Error')
        }else{
            // console.log(data)
            let tasksJson = JSON.parse(data)
            res.status(200).json({tasks: tasksJson});
        }
    } )

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



// Define route handler to create a new todo item
app.post("/tasks", function(req, res) {
    const newTodo = req.body; // Extract the new todo item from the request body

    // Generate a random ID for the new todo item
    const newId = Math.floor(Math.random() * Date.now()).toString(16);

    // Assign the generated ID to the new todo item
    newTodo.id = newId;

    // Add the new todo item to the todos array
    tasks.push(newTodo);

    // Send 201 Created response with the ID of the created todo item in JSON format
    res.status(201).json({ id: newId });
});



app.put("/tasks/:id", function (req, res){
    // const id = parseInt(req.params.id);
    const id = req.params.id;
    const updateTodo =  req.body;
    const todoIndex = tasks.findIndex(item => item.id === id)

    if(todoIndex === -1){
        return res.status(404).send('Todo item not found');
    }

    tasks[todoIndex] = {...tasks[todoIndex], ...updateTodo};


    res.status(200).send('Todo item updated successfully')

})

app.delete('/tasks/:id', function (req, res){
    const id = req.params.id;
    const deleteTodo = req.body;
    const delTodoIndex = tasks.findIndex(item => item.id === id)

        if(delTodoIndex === -1){
            return res.status(404).send("Todo item not found");
        }else{
            tasks.splice(([delTodoIndex]), 1)
            res.status(200).send('Todo task has been deleted')
        }
})



const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
}); 

