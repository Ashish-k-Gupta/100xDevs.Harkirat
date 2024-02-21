/* 
Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
To test, go to the 02-jwt folder and run npx jest ./tests
 */ 

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const zod = require("zod");
app.use(express.json());


// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    

    const userNameToken = jwt.sign(username, "1234567")
    return res.json({
        userNameToken
    })

})

const schema = zod.object({
    
})

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})