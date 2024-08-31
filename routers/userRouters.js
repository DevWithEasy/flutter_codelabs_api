const { singup,signin } = require('../controllers/userControllers')

const router = require('express').Router()

router.post('/signup',singup)
router.post('/signin',signin)


module.exports = router