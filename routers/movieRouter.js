const express = require('express')
const { movieController } = require('../controllers')

const router = express.Router()

router.get('/getmovie', movieController.getMovie)
router.post('/addmovie', movieController.addMovie)
router.delete('/deletemovie/:id', movieController.deleteMovie)
router.put('/editmovie/:id', movieController.editMovie)
router.get('/getmoviebycategory', movieController.getMovieByKategori)

module.exports = router