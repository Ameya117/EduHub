const mongoose = require('mongoose');
const mongoURI = import.meta.VITE_mongoURI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected to database")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;