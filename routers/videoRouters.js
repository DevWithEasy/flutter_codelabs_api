const { createVideo, updateVideo, deleteVideo, getVideo } = require('../controllers/videoControllers')

const router = require('express').Router()

router.post('/',createVideo)
router.put('/:id',updateVideo)
router.delete('/:id',deleteVideo)
router.get('/',getVideo)


module.exports = router