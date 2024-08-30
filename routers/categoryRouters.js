const { demo } = require('../controllers/userControllers')

const router = require('express').Router()

router.get('/',demo)


module.exports = router