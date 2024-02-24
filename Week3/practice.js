const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const zod = require("zod");
app.listen(express.json());


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);



function signJwt(username, )