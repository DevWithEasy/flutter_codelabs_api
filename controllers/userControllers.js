const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.singup=async(req,res,next) =>{
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await User({
            ...req.body,
            password : hashedPassword
        })

        await newUser.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'User registered successfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.signin=async(req,res,next) =>{
    try {
        const find = await User.findOne({email : req.body.email})

        const isMatch = await bcrypt.compare(req.body.password, find.password)

        if(isMatch){
            return res.status(200).json({
                success : true,
                status : 200,
                message : "Logged In Successfully",
                data : find
            })
        }
        return res.status(401).json({
            success : false,
            status : 401,
            message : "Invalid Credentials"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}