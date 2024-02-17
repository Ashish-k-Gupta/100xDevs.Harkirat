/* 
let people sign up to your website. Onlly allow signed in users to see people (create a dummy people list)


1- HASHING -   Whenever we create a login id/password to access some service. The password are store somewhere in a database. For example I have my gaming id 
                gamer007@mail.com and password is = "myNameIsBond". Now here this password is a string but in actual database storing my password like this can 
                create too many risk. As we know people tend to repeat their password. In a case where our database got hacked the hacker can guess password for
                my facebook account which can create further problems. Also the changing in input for like if you add a single charcter to your password it will
                change the hashcode by alot. So that it will make it alot difficult for a person to decode that hashcode. 
                
                So what hashing does now my
                 password "myNameIsBond" will look
                 like "1a5f0f43e3bcf23ad4e17d23b925154f0e06529b52c1c8b7fd478e8e058a5e8d"
                 This process is only one way which means it is impossible for someone to who even go the hashcode for my password to guess my password form the 
                 the hash string only. 
                 Also, it important to note that this code doesn't change. So that once the hashcode is created and stored and whenver the user try to login again
                 it can compare it to the already stored hashcode and confirm if the password he has entered is correct or not.
                 



2-  Encryption: Encryption on the other hand is goes two ways. It's like a changing your data into some gebrish format. Which means by only looking it no one be
                be able to guess what is it. But it also has a key (that is a way to change that gebrish into the actual information). Whoever will have that key
                will be able to DECRYPT your data. For example all the images you post on Instagram are get encryted. Let when you fetch those images the will 
                decrypted back to their orginal format. 



  
3-  JSON WEB TOKEN -  This neither HASHING nor ENCRYPTION but you can say it's like creating a digital signature. What JSON web token does it converts your data to a long long string.
                      The only differce is that any one can get back the original data from that WEB TOKEN. You can just put that token to a website which converts 
                      JSON WEB TOKEN to original data, you can just get original data which was stored in it.
                      Converstion part here is can be done by anyone.
                      But there is a part called varification - which can be only done the by the same webservice where this JSON Web Token belongs too.

                      You take a password pass it through jwt.encode it turns that password into JSON WEB TOKEN string. Now when you pass this TOKEN "String"
                      to a jwt.verify it also check it with the password you have created for that website. If that password matches then it will let you use or
                      not use those services.
                      Verification means that the password stored on servers and the password stored is TOKEN "String" matches. If yes it let's you access those 
                      services or if not it restrain you from those.


4- LOCAL STORAGE




How this works?

Let's you have a website. A user comes to the website create a login id/password. Now your backend code convert the Password a to hashcode and store into a database.
Also, you back also generates a JWT code for user and send it back to the user browser and there the browser stores that data into local storage. Later whenever a user
request from his browser that JWT token stored in localStorage get sent along that request. And it keeps verifying with every request that user is login id/password and it's 
correct user that is login. When you logout yourself from the database the browser deletes that stored JWT code from the local storage and now user can't access the 
website without logining in again without password.
This process repeats.

*/


/* 
A website which has 2 endpoints - 


POST/signin
Body

*/


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

// app.use(express.json());

    const ALL_USERS = [
        {
            username: "ashish@gmail.com",
            password: '123', 
            name: "Ashish Gupta,"
        },
        {
            username: "pawan@gmail.com",
            password: '123321', 
            name: "Pawan Nara,"

        },
        {
            username: "karan@gmail.com",
            password: '123456', 
            name: "Karan Gandhi,"

        }
    ]

function userExists(username, password){

}


app.get("/users", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "user doesn't exist in our in memory DB"
        });
    }

    var token = jwt.sign({username: username}, "123456");
    return res.json({
        token,
    });
})

app.post("/signin", (req, res) =>{

    const token = req.header.authorization;
    try{
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        //return a list of users other than this username
    } catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }

})


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running in PORT ${PORT}`)
});