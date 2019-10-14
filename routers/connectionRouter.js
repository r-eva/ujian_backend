const express = require('express')
const { connectionController } = require('../controllers')

const router = express.Router()

router.get('/connectmovie', connectionController.connectMovie)
router.post('/addconnection', connectionController.addConnection)
router.put('/editconnection/:id', connectionController.editConnection)
router.delete('/deleteconnection/:id', connectionController.deleteConnection)


module.exports = router