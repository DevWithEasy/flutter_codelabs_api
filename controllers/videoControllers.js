const Video = require('../models/Video');
exports.createVideo=async(req,res,next) =>{
    try {
        const {courseId} = req.params

        const order = await Video.countDocuments()
        
        const newVideo = new Video({
            ...req.body,
            course: courseId,
            orderNo: order + 1
        })

        await newVideo.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Video added successfully'
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.updateVideo=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Video.findByIdAndUpdate(id, req.body)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Video updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.deleteVideo=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Video.findByIdAndDelete(id)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Video deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.getVideo=async(req,res,next) =>{
    try {

        const {courseId} = req.params

        const Videos = await Video.find({course : courseId})

        return res.json(Videos)
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}


exports.updateVideoStatus=async(req,res,next) =>{
    try {
        const {id} = req.params

        const video = await Video.findById(id)

        video.isComplete = !video.isComplete

        await video.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Video updated successfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}