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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});
