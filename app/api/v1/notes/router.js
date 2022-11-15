const express = require('express')
const { index, find, create, update, destroy, } = require('./controller')

const router = express()

router.get('/notes', index)
router.get('/notes/:id', find)
router.post('/notes', create)
router.put('/notes/:id', update)
router.delete('/notes/:id', destroy)

module.exports = router