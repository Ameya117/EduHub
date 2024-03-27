const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.VITE_MONGOURI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected to database")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;