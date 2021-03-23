import React from 'react';
import App from "./App"
import "./index.css"
import ReactDOM from 'react-dom';
const app = require("express")();
const http = require("http");
const ser = http.createServer(app)
const PORT = 3000 || process.env.PORT;

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById("root")
);

ser.listen(PORT)
