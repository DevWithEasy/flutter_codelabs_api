const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
},{
    timestamps:true
})

const Division = mongoose.model('Division',divisionSchema)
module.exports = Division