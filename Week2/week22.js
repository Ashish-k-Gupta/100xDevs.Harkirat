/*
HTTP (client side)
*/

/* 
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());



app.post('/', (req, res) =>{
    // res.send('One must Imagine Sisyphus happy');

    const message = req.body.message;
    console.log(message);
    res.json({
        output: "2 + 2 = 4"
    })
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
}) */


const { json } = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json())


const users = [{
        name: "John",
         kidneys: [{
            healthy: true  
        }]
    }];

/*
    app.get("/", function(req, res){
        const ashishKidneys = users[0].kidneys;
        const totalKidneys = ashishKidneys.length;
        let healthyKidneys = 0;

        for(let i = 0; i < ashishKidneys.length; i++){

            if(ashishKidneys[i].healthy === true){
             healthyKidneys = healthyKidneys + 1;
        }

        }

        const numberOfUnhealthyKidneys = totalKidneys - healthyKidneys;
        res.json({
            totalKidneys,
            healthyKidneys,
            numberOfUnhealthyKidneys
        })
    })
*/


app.get("/", function (req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys, 
        numberOfUnhealthyKidneys
    })
})



    app.post("/", function(req,res){
        const isHealthy = req.body.isHealthy;
        users[0].kidneys.push({
            healthy: isHealthy
        })
        res.json({
            msg: "Done!"
        })
    })
    
 
app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


app.delete("/", function(req, res){
  const newKidneys = [];
  for(let i = 0; i< users[0].kidneys.length; i++ ){
    if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy: true
        })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Done"
  })

})



/* 
app.post("/", function(req,res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })

})

 */

    
    /* 
app.get("/", function(req, res){
const AshishKidneys = users[0].kidneys;
console.log(users[0].kidneys)
const numberOfKidneys = kidneys.length;
let numberOfHealthyKidneys = 0;
for(let i = 0; i < AshishKidneys.length; i++){
    if(AshishKidneys[i].healthy){
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
}

const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

res.json({
    numberOfKidneys,
    numberOfHealthyKidneys, 
    numberOfUnhealthyKidneys
})

})

 */


// console.log(AshishKidneys)
// res.send(console.log(users.name))
// });

/* 
app.post("/", function(req, res){

});


app.put("/", function(req, res){

});


app.delete("/", function(req, res){

});
*/
app.listen(3000); 