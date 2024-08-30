const { createDivision, updateDivision, deleteDivision, getDivision } = require('../controllers/divisionControllers')

const router = require('express').Router()

router.post('/',createDivision)
router.put('/:id',updateDivision)
router.delete('/:id',deleteDivision)
router.get('/',getDivision)


module.exports = router