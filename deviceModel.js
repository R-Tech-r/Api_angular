const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    deviceId:Number,
    deviceName:String,
    status: String,
    lastServiceDate:String,
})


const Device = mongoose.model('device',deviceSchema);

module.exports=Device;