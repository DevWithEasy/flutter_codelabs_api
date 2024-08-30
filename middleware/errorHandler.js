const multer = require("multer");
const createError = require("../utils/createError");

const errorHandler = (app) => {
    app.use((err, req, res, next) => {
        const status = err.status || 500;
        const message = err.message || "something went wrong"
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ error: 'File size exceeds the limit of 0.5 MB' });
            }
            return createError(400, 'File upload faild.')
        }
        return res.status(status).json({
            success: false,
            status,
            message
        })
    })
}

module.exports = errorHandler