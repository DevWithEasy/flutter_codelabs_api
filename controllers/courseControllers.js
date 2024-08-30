const Course = require('../models/Divison')
exports.createCourse=async(req,res,next) =>{
    try {
        const newCourse = new Course({
            ...req.body
        })

        await newCourse.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Course added successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.updateCourse=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Course.findByIdAndUpdate(id, req.body)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Course updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.deleteCourse=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Course.findByIdAndDelete(id)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Course deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.getCourse=async(req,res,next) =>{
    try {
        const Courses = await Course.find()

        return res.json(Courses)
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}