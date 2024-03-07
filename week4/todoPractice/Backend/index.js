// Write basic express

const express = require('express')
const app = express()
app.use(express.json());
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
// const { json } = require('body-parser')

 
 
/* 
  
    body{
        title: string;
        description: string;
        id: 
    }
   
*/


app.post("/todo", async (req, res) =>{
  const createPayload = req.body;
  const parsedPayLoad  = createTodo.safeParse(createPayload);
  if(!parsedPayLoad.success){
    res.status(411).json({
        msg: "You sent the wrong inputs", 
    })
    return
  }
  await todo.create({
    title: createPayload.title, 
    description: createPayload.description,
    complete: false
  })

  res.status(200).json({
    msg: "Your todo task has been added"
  })
    
})



app.get("/todos", async (req, res) =>{
  const todos = await todo.find({});

  res.json({
    msg: "Todo Created"
  })
})


app.put("/completed", async (req, res) =>{
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if(!parsedPayLoad.success){
    res.status(401).json({
      msg: "You have sent the wrong input"
    })
  }
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  }
  )
  res.json({
    msg: "Todo marked as completed"
  })

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

// zod
