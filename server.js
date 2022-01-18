import express from 'express';
import fs from 'fs';
import cors from 'cors';
const port_num = 3000; // port number
const app = express();
app.use(express.json());// telling express to use JSON

app.get('', cors(),(req, res) => { // code for GET request with CORS (Cross-Origin-Resource-Sharing enabled only for this route)
    let response = JSON.parse(fs.readFileSync('./data.json')); //read data from file and convert to JSON
    res.json(response); //send response data
  });
  

app.listen(port_num); // start hosting on posrt 3000 