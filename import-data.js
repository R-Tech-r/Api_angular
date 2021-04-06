const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const Device = require('./model/deviceModel/')
const app = express();

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE_LOCAL;


mongoose.connect(DB,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify: false
}).then(()=>console.log('DB connection is succeessful'));


const devices = JSON.parse(
    fs.readFileSync(`${__dirname}/data/data.json`,'utf-8')

);

const importData = async () => {
    try{
        await Device.create(devices);
        console.log('Data Successfully loaded!');
    }catch (err){
        console.log(err);
    }
    process.exit();
}


const deleteData = async () => {
    try{
        await Device.create(devices);
        console.log('Data Successfully deleted!');
    }catch (err){
        console.log(err);
    }
    process.exit();
}

if (process.argv[2]==='--import'){
    importData();
}else if(process.argv[2]==='--delete'){
    deleteData();
}
console.log(process.argv);