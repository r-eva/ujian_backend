const express = require('express')
const { kategoriController } = require('../controllers')

const router = express.Router()

router.get('/getkategori', kategoriController.getKategori)
router.get('/getkategori/:id', kategoriController.getKategoriById)
router.post('/addkategori', kategoriController.addKategori)
router.delete('/deletekategori/:id', kategoriController.deleteKategori)
router.put('/editkategori/:id', kategoriController.editKategori)

module.exports = router