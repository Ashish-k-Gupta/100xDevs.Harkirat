/* 
Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
To test, go to the 02-jwt folder and run npx jest ./tests
 */ 
/* 


const jwt = require("jsonwebtoken");

// decode, verify, generate

const contents  =  {
    "name": "Ashish",
    "accoutNumber": 36374362,
    "iat": 1708523454
  
}

// jwt
const newToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXNoaXNoIiwiYWNjb3V0TnVtYmVyIjozNjM3NDM2MiwiaWF0IjoxNzA4NTIzNDU0fQ.8D4H4PfmQTXY9XrwacMJpBn6CiDVwRRtQx7ERJDjsT8", "adfdsdf");
console.log(newToken)

//this token has been generate using this secret, and hencce this token can only be verified using this secret

 */





const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  
  if(!usernameResponse.success || !passwordResponse.success){
      return null;
    }
      else
        {
          const signature = jwt.sign({username}, "1234567")
          return signature
        }
}

const answer = signJwt("bsdkJadaMattBol@111111.com", "1232567")
console.log(answer);


function decodeJwt(token){
    let decodeToken = jwt.decode(token);
  
    if(decodeToken){
      return true;
    }else{
      return false;
    }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJzZGtKYWRhTWF0dEJvbEAxMTExMTEuY29tIiwiaWF0IjoxNzA4NjE2OTk2fQ.x1p2PMTSRnPYb1tut4OfptOdfjaM5Q-vgCt4UtbqYIs"))

function verifyJwt(token){
    let decodeToken = jwt.decode(token);

    if(decodeToken){
      return true;
    }else{
      return false;
    }
}

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJzZGtKYWRhTWF0dEJvbEAxMTExMTEuY29tIiwiaWF0IjoxNzA4NjE3MDY2fQ.QktpanP7JEOV9GIyIreFadz8vI4bTxmp4eEW3jF4Odw"))