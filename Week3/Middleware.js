const express = require('express');
const app = express();

app.get("/health-checkup", (req,res) =>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if(!(username === "Ashish" && password === "pass")){
        res.status(400).json({"msg": "Something up with your inputs  "})
        return
    } 
    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(400).json({"msg": "Something up with your inputs  "})
        return
    }
    
    res.json({
        msg: "Your kidney is fine!"
    })
});  

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
}); 