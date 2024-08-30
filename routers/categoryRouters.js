const { createCategory, updateCategory, deleteCategory, getCategory } = require('../controllers/categoryControllers')

const router = require('express').Router()

router.post('/',createCategory)
router.put('/:id',updateCategory)
router.delete('/:id',deleteCategory)
router.get('/',getCategory)


module.exports = router