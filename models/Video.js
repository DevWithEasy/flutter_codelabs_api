const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    course:{
        type: mongoose.Schema.Types.ObjectId,
        required: 'Course'
    },
    videoId:{
        type: String,
        required:true
    },
},{
    timestamps:true
})

const Video = mongoose.model('Video',videoSchema)
module.exports = Video