const mongoose = require('mongoose');

const demoSchema = mongoose.Schema({
    hello:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const Demo = mongoose.model('Demo',demoSchema)
module.exports = Demo