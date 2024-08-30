const Category = require('../models/Category')
exports.createCategory=async(req,res,next) =>{
    try {

        const newCategory = new Category({
            ...req.body
        })

        await newCategory.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Category added successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.updateCategory=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Category.findByIdAndUpdate(id, req.body)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Category updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.deleteCategory=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Category.findByIdAndDelete(id)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Category deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.getCategory=async(req,res,next) =>{
    try {
        const Categorys = await Category.find()

        return res.json(Categorys)
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}