const express = require('express')
const { index, create } = require('./controller')

const router = express()

router.get('/users', index)
router.post('/users', create)

module.exports = router
