const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    orderNo:{
        type: Number,
        required:true
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        required: 'Course'
    },
    videoId:{
        type: String,
        required:true
    },
    isComplete : {
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})

const Video = mongoose.model('Video',videoSchema)
module.exports = Video