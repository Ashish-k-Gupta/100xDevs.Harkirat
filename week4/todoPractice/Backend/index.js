// Write basic express

const express = require('express')
const app = express()
app.use(express.json());
// const { json } = require('body-parser')

/* 
    body{
        title: string;
        description: string;
        id: 
    }
*/


app.post("/todo", (req, res) =>{
    
})



app.get("/todos", (req, res) =>{

})


app.put("/completed", (req, res) =>{

})



const PORT = 3000;
app.listen(PORT, ()=>{
    `Server is running on PORT ${PORT}`
})