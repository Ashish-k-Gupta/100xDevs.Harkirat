const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
    name: "Ashish", 
    accoutNumber: 36374362
}

// jwt
const token = jwt.sign(value, "123456");
console.log(token)

//this token has been generate using this secret, and hencce this token can only be verified using this secret

/* 
TOKEN GENERATED

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXNoaXNoIiwiYWNjb3V0TnVtYmVyIjozNjM3NDM2MiwiaWF0IjoxNzA4NTI1MjgwfQ.zomvv70MOnwg6MdCvwxnRMnuRBsxGig8uBqqNaL4UHs

*/
/* 
Now if you try to verify this token using below code the user who is trying to verify the token should know the secret/password. Which is
here in this case is {"123456"}. Otherwise he won't be able to verify it. He can definately see what data is stored in the token using simple JWT decoder but he can't verify it until or unless he knows the secret/password


const token = jwt.verify(value, "123456");
console.log(token)
 */