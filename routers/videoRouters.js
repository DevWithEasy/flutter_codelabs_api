const { createVideo, updateVideo, deleteVideo, getVideo, updateVideoStatus } = require('../controllers/videoControllers')

const router = require('express').Router()

router.post('/:courseId',createVideo)
router.put('/:id',updateVideo)
router.delete('/:id',deleteVideo)
router.get('/:courseId',getVideo)
router.put('/status/:id',updateVideoStatus)


module.exports = router