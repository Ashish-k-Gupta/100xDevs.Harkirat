const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({"msg": "Everthing is fine this time."})
})

app.post("/health-check", (req, res) =>{

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;


    res.send("you have " + kidneyLength + " kidneys")
})


// Global Catches 
app.use(function(err, req,res, next){
    res.json({
        "Msg": "Sorry something is up with our server"
    });
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});
