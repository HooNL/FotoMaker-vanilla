const express = require('express')
const { fotoMaker } = require('../controllers/openaiController')
const router = express.Router()

router.post('/fotomaker', fotoMaker)



module.exports = router
