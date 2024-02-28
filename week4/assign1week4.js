const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));



app.get("/answer", (req, res)=>{

       let p = parseFloat(req.query.p);
    let r = parseFloat(req.query.r);
    let t = parseFloat(req.query.t);

    let answer = p * (1 + r * t / 100);

    // Send the answer back to the client
    res.json({ answer });
});

// })



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sever is running on PORT ${PORT}`)
})