const Category = require('../models/Category')
const Division = require('../models/Divison')
exports.createDivision=async(req,res,next) =>{
    try {
        const newDivision = new Division({
            ...req.body
        })

        await newDivision.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Division added successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.updateDivision=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Division.findByIdAndUpdate(id, req.body)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Division updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.deleteDivision=async(req,res,next) =>{
    try {
        const {id} = req.params

        await Division.findByIdAndDelete(id)

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Division deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.getDivision = async (req, res, next) => {
    try {
        const divisions = await Division.find();

        const divisionsWithCategories = await Promise.all(divisions.map(async (division) => {
            const categories = await Category.find({ division: division._id });
            return {
                ...division._doc,
                categories
            };
        }));

        return res.json(divisionsWithCategories);
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        });
    }
}