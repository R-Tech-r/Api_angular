const express =require('express');
const dotenv = require('dotenv');

const mongoose = require('mongoose');

const app = express();

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE_LOCAL;

const PORT = process.env.PORT;

mongoose.connect(DB,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify: false
}).then(()=>console.log('DB connection is succeessful'));



app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(PORT, ()=>{
    console.log(`App is running on this ${PORT}`)

})
