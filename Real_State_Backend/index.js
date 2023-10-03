
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const propertyRouter = require("./routes/property")
const cors = require("cors");
const userRouter = require("./routes/user");
require('dotenv').config();
const app = express();


app.use(express.static("uploads"));
app.use(cors({}));

app.use(bodyParser.json());


const port = process.env.PORT;
const start = async ()=>{
    await app.listen(port,()=>console.log(`connected to the port ${port}`));
   
}
app.use("/prop",propertyRouter);
app.use("/user",userRouter);

start();

module.exports = start
// To start the server 
// use => npm run serve