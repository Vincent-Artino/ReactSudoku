import React from 'react';
import ReactDOM from 'react-dom';
const app = require("express")();
const http = require("http");
const ser = http.createServer(app)
const PORT = 3000 || process.env.PORT;

app.get("/", (req , res)=>{
    res.sendFile(__dirname+"/index.html");
})


ser.listen(PORT)
