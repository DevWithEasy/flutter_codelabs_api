const { createCourse, updateCourse, deleteCourse, getCourse } = require('../controllers/courseControllers')

const router = require('express').Router()

router.post('/',createCourse)
router.put('/:id',updateCourse)
router.delete('/:id',deleteCourse)
router.get('/',getCourse)

module.exports = router