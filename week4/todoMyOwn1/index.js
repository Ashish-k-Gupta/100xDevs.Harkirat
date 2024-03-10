const experss = require("express")
const app = experss();
app.use(experss.json());
import createTodo, { updateTodo } from "./backend/type";




app.post("/todo", (req, res) =>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(401).json({
        msg: "Your input is invalid"
    })
    return; 
}

// Put it in MongoDB
})

app.get("/todos", (req, res) =>{
    
})

app.put("/completed", (req, res) =>{
    const updatePayload = req.body;
    const parseUpdatedPayload = updateTodo.safeParse(updatePayload);
    if(!parseUpdatedPayload.success){
        res.status(411).json({
            msg: "Your input is invalid"
        })
        return;
    }
    
})


app.delete("", (req, res) =>{
    
})



const PORT = 3000;
app.listen(PORT, () =>{ 
    console.log(`Your server is runnin on PORT ${PORT}`)
})


/* 
const experss = require("express");
const app = experss();
app.listen(experss.json());

import createTodo from './backend/type'


app.post("/todo", (req, res) =>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Your input is not valid"
        })
    }
})


const PORT = 3000; 
app.listen(PORT, ()=>{
    console.log(`Your server is running on PORT ${PORT}`)
}) */