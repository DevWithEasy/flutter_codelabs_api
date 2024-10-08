const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    instructor:{
        type: String,
        required:true
    },
    language:{
        type: String,
        required:true
    },
    lesson:{
        type: Number,
        required:true,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
},{
    timestamps:true
})

const Course = mongoose.model('Course',courseSchema)
module.exports = Course