const { createCourse, updateCourse, deleteCourse, getCourse } = require('../controllers/courseControllers')

const router = require('express').Router()

router.post('/:catId',createCourse)
router.put('/:id',updateCourse)
router.delete('/:id',deleteCourse)
router.get('/:catId',getCourse)

module.exports = router