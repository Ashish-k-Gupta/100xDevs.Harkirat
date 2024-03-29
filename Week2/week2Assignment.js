/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files



  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */


const express = require('express');
const fs = require('fs');
const path = require('path');
// const express = express();
const app = express();
app.use(express.json())


// Solution of first question

app.get("/", function(req, res){
    // console.log("Hello, world")

    const directoryPath = 'C HTTP server/files'
    fs.readdir(directoryPath, (err, files) =>{
        if(err){
            return res.status(500).json({error: 'Error reading directory'});
        }

        res.json({files});
    })
})


// Solution of Second  question

app.get("files/:fileName", function(req, res){
    const name = req.params.fileName;
    console.log(name)
    fs.readFile(name,"utf-8", function(err, data){
      res.json({
        data
      });
  })   
})


app.get("/HTTP/files/:fileName", function(req, res){
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'HTTP', 'files', fileName);

    fs.readFile(filePath, "utf-8", function(err, data){
        if (err) {
            return res.status(500).json({ error: 'File not found in the system' });
        }

        res.json({ data });
    });
});


const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
}); 

