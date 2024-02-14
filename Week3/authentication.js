const express = require("express");
const app = express();
const zod =require("zod");
const schema = zod.array(zod.number());

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({"msg": "Everthing is fine this time."})
})

app.post("/health-check", (req, res) =>{
    // kidney = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })

        } else {
            res.send({
                response :"You have " + kidneyLength + " kidneys"
            })
    }
  

    // res.send("you have " + kidneyLength + " kidneys")
})


// Global Catches 
/* 
app.use(function(err, req,res, next){
    res.json({
        "Msg": "Sorry something is up with our server"
    });
}); 
 */


/* 
email: string => email
password: atleast 8 letters
country: "IN", "US"
*/

const schema1 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


// if this is an array of number with atleast 1 input, return true, else return false
function validateInput(arr){
    if(typeof arr == 'object' && arr.length >= 1 && arr[0] == "number" && arr.every((item) => typeof item == 'number')) {
        return true
    }
}


function validateInputWithZod(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response); 
}


// only accept if the input in id is a email address and password should be atleast 8 character
function idPassowrdZod(obj){{
    const schema = zod.object({
        email: zod.string().email(), 
        password: zod.string().min(8)

    })

    const response = schema.safeParse(obj);
    console.log(response); 

}}

idPassowrdZod({
    email: "ashukumar007@gmail.com", 
    password: "11111111"
})


app.post('/login', (req, res) =>{
    const inputs = req.body;
    const response = idPassowrdZod(inputs)
        if(!response.success){
            res.json({
                msg: "Your input is not correct"
            }) 
            return;
        }
    }
)


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});
