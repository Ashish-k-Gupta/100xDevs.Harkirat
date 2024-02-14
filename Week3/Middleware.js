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




let numberOfRequest = 0;
function calculateRequest(req, res, next){
    numberOfRequest ++;
    console.log(numberOfRequest)
    next();
}

app.use(calculateRequest) 

app.get('/count', function (req, res) {
    res.json({
        msg: "Hi there"
    })
})











const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
}); 



/* 
if(!(username == "Ashish" && password == "pass"))
if(username != "Ashish" || password != "pass")
{
    res.status(400).json({"msg": "Something up with your inputs"})
} */
