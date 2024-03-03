// Write basic express

const express = require('express')
const app = express()
app.use(express.json());
const { createTodo } = require("./types")
// const { json } = require('body-parser')

/* 
    body{
        title: string;
        description: string;
        id: 
    }
*/


app.post("/todo", (req, res) =>{
  const createPayload = req.body;
  const parsedPayLoad  = createTodo.safeParse(createPayload);
  if(!parsedPayLoad.success){
    res.status(411).json({
        msg: "You sent the wrong inputs", 
    })
    return
  }
    
})



app.get("/todos", (req, res) =>{

})


app.put("/completed", (req, res) =>{

})



const PORT = 3000;
app.listen(PORT, ()=>{
    `Server is running on PORT ${PORT}`
})


// zod
