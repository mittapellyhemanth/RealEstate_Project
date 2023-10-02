// Connecting to Mongodb

const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.DB_URL
const connectDB = ()=>{
  return mongoose.connect(URL,{
useNewUrlParser:true,
useUnifiedToPology:true
  })
}

module.exports = connectDB ;