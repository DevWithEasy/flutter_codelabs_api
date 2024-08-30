const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    division:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Division'
    },
    courses:{
        type: Number,
        required:true,
        default:0
    },
},{
    timestamps:true
})

const Category = mongoose.model('Category',categorySchema)
module.exports = Category