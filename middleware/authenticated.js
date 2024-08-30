const jwt = require('jsonwebtoken')
const authenticated=(req,res,next)=>{
    try {
        const token = req.headers['authorization'].split(' ')[1]
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                res.status(401).json({
                    status: 500,
                    success : false,
                    message : 'Authentication failed'
                })
            }else{
                req.body.userId = decode.id
                next()
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            success : false,
            message : error.message
        })
    }
}

module.exports = authenticated