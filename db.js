const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to Mongodb Server');
})

db.on('error', ()=>{
    console.log('Mongodb connection error:',err);
})

db.off('connected', ()=>{
    console.log('Mongodb disconnected');
});

module.exports = db;
