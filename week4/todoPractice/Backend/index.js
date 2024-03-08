// Write basic express

const express = require('express')
const app = express()
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const cors = require("cors")

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}
));
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
  try{

    const todos = await todo.find({});
    
    res.json({
      // todos: []
      todos: todos
    })
  }
   catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({
        error: "Server error while fetching todos"
    });
  }
  });


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
