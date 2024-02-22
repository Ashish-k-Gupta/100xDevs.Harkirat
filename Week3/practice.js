const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

if(!emailSchema.success || !passwordSchema.success){
    return null;
}else{
    
    function signJwt(username, password){
        const signature = jwt.sign({username}, "1234567")
        return signature
    }
}